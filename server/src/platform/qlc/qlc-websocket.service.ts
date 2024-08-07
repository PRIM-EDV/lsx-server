import { Injectable } from "@nestjs/common";
import { Subject } from "rxjs";
import { LoggingService } from "src/core/logging/logging.service";
import  * as WebSocket  from "ws"

const URL = 'ws://192.168.178.25:9999/qlcplusWS';

@Injectable()
export class QlcWebsocketService {

    public onOpen: Subject<void> = new Subject<void>();
    public onClosed: Subject<void> = new Subject<void>();

    private ws: WebSocket;
    private requests: Map<string, (data: string[]) => void> = new Map<string, (data: string[]) => void>();

    constructor(private readonly log: LoggingService) {
       this.connectWebsocket();
    }

    public async getQlcValue(cmd: string, params = ''): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            this.requests.set(cmd, resolve);
            this.ws.send(`QLC+API|${cmd}${params}`);
            setTimeout(this.rejectOnTimeout.bind(this, cmd, reject), 5000)
        });
    }

    public async setQlcValue(msg: string) {
        if(this.ws.readyState == WebSocket.OPEN) {
            this.ws.send(msg);
        }
    }

    private onConnectionError() {
        setTimeout(this.reconnectWebsocket.bind(this), 5000);
    }

    private onConnectionClosed() {
        this.log.info(`Could not connect to ${URL} retrying...`)
        setTimeout(this.reconnectWebsocket.bind(this), 5000);
        this.onClosed.next();
    }

    private onConnectionSuccess() {
        this.log.info(`Connected to ${URL}`);
        this.onOpen.next();
    }

    private onMessage(message: Uint8Array) {
        const payload = String.fromCharCode.apply(null, new Uint16Array(message)).split('|') as string[];
        console.log(payload)
        if(payload[0] == "QLC+API"){
            const cmd = payload[1];
            if(this.requests.has(cmd)){
                this.requests.get(cmd)(payload.slice(2));
                this.requests.delete(cmd);
            }
        }
    }

    private reconnectWebsocket() {
        if (!this.ws || this.ws.readyState == WebSocket.CLOSED) {
            this.connectWebsocket();
        }
    }

    private connectWebsocket() {
        this.ws = new WebSocket(URL);
        this.ws.on('error', this.onConnectionError.bind(this));
        this.ws.on('close', this.onConnectionClosed.bind(this));
        this.ws.on('open', this.onConnectionSuccess.bind(this));
        this.ws.on('message', this.onMessage.bind(this));
    }

    private rejectOnTimeout(id: string, reject: (reason?: any) => void) {
        if(this.requests.delete(id)) {
            reject();
        }
    }


}
