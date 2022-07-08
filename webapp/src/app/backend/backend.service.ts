import { Injectable } from "@angular/core";

import { Subject } from "rxjs";
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { LsxMessage } from "proto/lsx";


@Injectable({providedIn: 'root'})
export class BackendService {
    public on_message: Subject<LsxMessage> = new Subject<LsxMessage>();
    public on_open: Subject<void> = new Subject<void>();
    public on_close: Subject<void> = new Subject<void>();

    private _ws!: WebSocketSubject<any>;

    constructor() {
        this._ws = webSocket({url: 'ws://localhost:3000', openObserver: { next: () => {this.on_open.next()} }});

        this._ws.subscribe({
            next: this._on_message.bind(this),
            error: (err) => {},
            complete: this._on_close.bind(this)
        });
    }


    public send_message(msg: LsxMessage) {
        this._ws.next({event: 'msg', data: JSON.stringify(LsxMessage.toJSON(msg))});
    }

    private _on_message(buffer: {event: 'msg', data: string}) {
        const msg = LsxMessage.fromJSON(JSON.parse(buffer.data));

        // this.on_message.next(msg);

        console.log(msg)
    }

    private _on_close() {
        this.on_close.next();
    }
}
