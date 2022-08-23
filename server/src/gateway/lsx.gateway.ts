import * as WebSocket from 'ws';
import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { v4 as uuidv4 } from 'uuid';

import { LsxMessage, Request, Response } from 'proto/lsx';
import { LoggingService } from 'src/logging/logging.service';

interface Ws extends WebSocket {
  id: string;
}

@WebSocketGateway()
export class LsxGateway {
  protected activeClients: Map<string, Ws> = new Map<string, Ws>();
  protected requests: Map<string, (value: Response) => void> = new Map<string, (value: Response) => void>();

  constructor(private readonly log: LoggingService) {
  }

  @WebSocketServer() server: WebSocket.Server;


  handleDisconnect(client: Ws) {
    this.activeClients.delete(client.id);
    this.log.info(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Ws, ...args: any[]) {
    client.id = uuidv4();
    this.activeClients.set(client.id, client);
    this.log.info(`Client connected: ${client.id}`);
  }

  protected async request(client: Ws, req: Request): Promise<Response> {
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

  protected async requestAll(req: Request) {
    const requests: Promise<Response>[] = [];
    for (const [id, activeClient] of this.activeClients) {
      requests.push(this.request(activeClient, req))
    }

    return Promise.allSettled(requests);
  }

  protected async requestAllButOne(client: Ws, req: Request) {
    const requests: Promise<Response>[] = [];
    for (const [id, activeClient] of this.activeClients) {
      if (activeClient != client) {
        requests.push(this.request(activeClient, req))
      }
    }

    return Promise.allSettled(requests);
  }

  protected respond(client: Ws, id: string, res: Response) {
    const msg: LsxMessage = {
        id: id,
        response: res
    }
    this.sendToClient(client, msg);
  }

  protected rejectOnTimeout(id: string, reject: (reason?: any) => void) {
    if(this.requests.delete(id)) {
        reject();
    }
  }

  protected sendToAllClients(msg: LsxMessage) {
    for (const [id, client] of this.activeClients) {
      this.sendToClient(client, msg);
    }
  }

  protected sendToClient(client: Ws, msg: LsxMessage) {
    const buffer = {event: 'msg', data: JSON.stringify(LsxMessage.toJSON(msg))};
    client.send(JSON.stringify(buffer))
  }
}
