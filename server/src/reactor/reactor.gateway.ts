import * as WebSocket from 'ws';
import { Logger  } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { v4 as uuidv4 } from 'uuid';

import { LsxMessage } from 'proto/lsx';
import { ReactorService } from './reactor.service';
import { LoggingService } from 'src/logging/logging.service';

interface Ws extends WebSocket {
  id: string;
}

@WebSocketGateway()
export class ReactorGateway {
  activeClients: Map<string, Ws> = new Map<string, Ws>();

  constructor(private readonly log: LoggingService, private reactorService: ReactorService) {}

  @WebSocketServer() server: WebSocket.Server;

  @SubscribeMessage('msg')
  handleMessage(client: Ws, payload: string): void {
    const msg = LsxMessage.fromJSON(JSON.parse(payload))

    if (msg.getPowerGridState) {
      if (msg.getPowerGridState.request) {
        console.log('blub')
      }
    }

    if(msg.setPowerGridState) {

    }

    // switch(msg.) {
    //     case Commands.CMD_RES_DEVICE_INFO:
    //         this.appService.setDeviceInfo(client, msg);
    //         this.sendDeviceInfosToWebapp();
    //         break;
    //     case Commands.CMD_REQ_DEVICE_INFO:
    //         const resDeviceInfo = this.appService.getDeviceInfo();
    //         this.sendCommand(client, {clientName: "Webserver", command: Commands.CMD_RES_DEVICE_INFO, resDeviceInfo: resDeviceInfo});
    //         break;
    //     case Commands.CMD_REQ_SET_RECORDING_STATE:
    //         this.appService.recordingState = msg.reqSetRecordingState.state;
    //         this.setRecordingState(msg.reqSetRecordingState.state);
    //         this.sendCommand(client, {clientName: "Webserver", command: Commands.CMD_RES_GET_RECORDING_STATE, resGetRecordingState: {state: this.appService.recordingState}});
    //         console.log(this.appService.recordingState);
    //         break;
    //     case Commands.CMD_REQ_GET_RECORDING_STATE:
    //         const recordingState: ResGetRecordingState = {state: this.appService.recordingState};
    //         this.sendCommand(client, {clientName: "Webserver", command: Commands.CMD_RES_GET_RECORDING_STATE, resGetRecordingState: recordingState});
    //         break;
    // }
  }

  // sendCommand(client: Ws, cmd: HomecageCommand) {
  //     const msg = {event: 'msg', data: JSON.stringify(HomecageCommand.toJSON(cmd))};

  //     client.send(JSON.stringify(msg));
  // }
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
}
