import * as WebSocket from 'ws';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { v4 as uuidv4 } from 'uuid';

import { LsxMessage, Request, Response } from 'proto/lsx';
import { ReactorService, ReactorStates } from './reactor.service';
import { LoggingService } from 'src/logging/logging.service';

interface Ws extends WebSocket {
  id: string;
}

@WebSocketGateway()
export class ReactorGateway {
  activeClients: Map<string, Ws> = new Map<string, Ws>();

  private requests: Map<string, (value: Response) => void> = new Map<string, (value: Response) => void>();

  constructor(private readonly log: LoggingService, private reactorService: ReactorService) {
    this.reactorService.onStateChange.subscribe(this.handleStateChange.bind(this));
  }

  @WebSocketServer() server: WebSocket.Server;

  @SubscribeMessage('msg')
  handleMessage(client: Ws, payload: string): void {
    const msg = LsxMessage.fromJSON(JSON.parse(payload))
    console.log(msg)
    if(msg.request) {
      if(msg.request.getPowerGridState){
        this.respond(client, msg.id, {getPowerGridState: {state: this.reactorService.getPowerGridState()}})
      }
      if(msg.request.setPowerGridState){
        this.reactorService.setPowerGridState(msg.request.setPowerGridState.state)
        this.respond(client, msg.id, {setPowerGridState: {}})
      }
    }
  
    if(msg.response) {
      if(this.requests.has(msg.id)) {
          this.requests.get(msg.id)!(msg.response);
          this.requests.delete(msg.id);
      }
    }
    
  }

  private async requestAll(req: Request) {
    const requests: Promise<Response>[] = [];
    for (const [id, activeClient] of this.activeClients) {
      requests.push(this.request(activeClient, req))
    }

    return Promise.allSettled(requests);
  }

  private async requestAllButOne(client: Ws, req: Request) {
    const requests: Promise<Response>[] = [];
    for (const [id, activeClient] of this.activeClients) {
      if (activeClient != client) {
        requests.push(this.request(activeClient, req))
      }
    }

    return Promise.allSettled(requests);
  }

  sendToAllClient(msg: LsxMessage) {
    for (const [id, client] of this.activeClients) {
      this.sendToClient(client, msg);
    }
  }

  sendToClient(client: Ws, msg: LsxMessage) {
    const buffer = {event: 'msg', data: JSON.stringify(LsxMessage.toJSON(msg))};
    client.send(JSON.stringify(buffer))
  }

  handleDisconnect(client: Ws) {
    this.activeClients.delete(client.id);
    this.log.info(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Ws, ...args: any[]) {
    client.id = uuidv4();
    this.activeClients.set(client.id, client);
    this.log.info(`Client connected: ${client.id}`);
  }

  private async handleStateChange(state: ReactorStates) {
    if (state.powerGridState) {
      const req: Request = {setPowerGridState: {state: state.powerGridState}};
      await this.requestAll(req);
    }

    if (state.powerPlantState) {
      const req: Request = {setPowerPlantState: {state: state.powerPlantState}};
      await this.requestAll(req);
    }
  }

  private async request(client: Ws, req: Request): Promise<Response> {
    return new Promise((resolve, reject) => {
        const msg: LsxMessage = {
            id: uuidv4(),
            request: req
      }

      this.requests.set(msg.id, resolve.bind(this));
      setTimeout(this.rejectOnTimeout.bind(this, msg.id, reject), 5000);
      this.sendToClient(client, msg);
    });
  }

  private respond(client: Ws, id: string, res: Response) {
    const msg: LsxMessage = {
        id: id,
        response: res
    }
    this.sendToClient(client, msg);
  }

  private rejectOnTimeout(id: string, reject: (reason?: any) => void) {
    if(this.requests.delete(id)) {
        reject();
    }
  }
}
