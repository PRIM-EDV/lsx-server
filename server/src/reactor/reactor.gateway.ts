import * as WebSocket from 'ws';
import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect} from '@nestjs/websockets';

interface Ws extends WebSocket {
    id: string
}

@WebSocketGateway()
export class ReactorGateway {
    
    // activeClients: Map<string, Ws> = new Map<string, Ws>();

    constructor() {
    }

    @WebSocketServer() server: WebSocket.Server;

    @SubscribeMessage('msg')
    handleMessage(client: Ws, payload: string): void {
        // const msg = HomecageCommand.fromJSON(JSON.parse(payload))

        // switch(msg.command) {
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

    handleDisconnect(client: Ws) {
        // this.appService.deleteDeviceInfo(client.id);
        // this.activeClients.delete(client.id);

        // this.sendDeviceInfosToWebapp();

        // this.logger.log(`Client disconnected: ${client.id}`);
    }

    handleConnection(client: Ws, ...args: any[]) {
        // client.id = uuidv4();
        // this.activeClients.set(client.id, client);
        // this.logger.log(`Client connected: ${client.id}`);
    }
}