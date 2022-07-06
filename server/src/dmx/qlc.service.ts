import { Injectable } from "@nestjs/common";
import { LoggingService } from "src/logging/logging.service";
import  * as WebSocket  from "ws"

const URL = 'ws://127.0.0.1:9999/qlcplusWS'

@Injectable()
export class QlcService {
    private ws: WebSocket;
    
    constructor(private readonly log: LoggingService) {
       this.connectWebsocket();
    }

    public setWidgetValue(widgetId: number, value: number) {
        if(this.ws.readyState == WebSocket.OPEN) {

        } else {
            this.log.error(`Could not set widget value: WebSocket not connected`)
        }
    }

    private onConnectionError() {
        this.log.info(`Could not connect to ${URL} trying to reconnect...`)
        // setTimeout(this.reconnectWebsocket.bind(this), 5000);
    }

    private onConnectionClosed() {
        this.log.info(`Could not connect to ${URL} retrying...`)
        setTimeout(this.reconnectWebsocket.bind(this), 5000);
    }

    private onConnectionSuccess() {
        this.log.info(`Connected to ${URL}`)
    }

    private reconnectWebsocket() {
        if (!this.ws || this.ws.readyState == WebSocket.CLOSED) {
            this.connectWebsocket();
        }
    }

    private connectWebsocket() {
        this.ws = new WebSocket(URL);
        this.ws.on('error', this.onConnectionError.bind(this));
        this.ws.on('close', this.onConnectionClosed.bind(this))
        this.ws.on('open', this.onConnectionSuccess.bind(this))
    }
}