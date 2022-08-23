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
import { LsxGateway } from 'src/gateway/lsx.gateway';

interface Ws extends WebSocket {
  id: string;
}

@WebSocketGateway()
export class ReactorGateway extends LsxGateway {

  constructor(
    log: LoggingService,
    private readonly reactorService: ReactorService
  ) {
    super(log);
    this.reactorService.onStateChange.subscribe(this.handleStateChange.bind(this));
  }

  @WebSocketServer() server: WebSocket.Server;

  @SubscribeMessage('msg')
  handleMessage(client: Ws, payload: string): void {
    const msg = LsxMessage.fromJSON(JSON.parse(payload))

    if(msg.request) {
      if(msg.request.getPowerGridState){
        this.respond(client, msg.id, {getPowerGridState: {state: this.reactorService.getPowerGridState()}})
      }
      if(msg.request.setPowerGridState){
        this.reactorService.setPowerGridState(msg.request.setPowerGridState.state)
        this.respond(client, msg.id, {setPowerGridState: {}})
      }
      if(msg.request.getPowerPlantState){
        this.respond(client, msg.id, {getPowerPlantState: {state: this.reactorService.getPowerPlantState()}})
      }
      if(msg.request.setPowerPlantState){
        this.reactorService.setPowerPlantState(msg.request.setPowerPlantState.state)
        this.respond(client, msg.id, {setPowerPlantState: {}})
      }
    }

    if(msg.response) {
      if(this.requests.has(msg.id)) {
          this.requests.get(msg.id)!(msg.response);
          this.requests.delete(msg.id);
      }
    }
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
}
