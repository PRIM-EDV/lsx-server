import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
  } from '@angular/common/http';

import { v4 as uuidv4 } from 'uuid';
import { Subject } from "rxjs";
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { GetPowerGridState, GetPowerPlantState, LsxMessage, PowerGridState, PowerPlantState, Request, Response } from "proto/lsx";

const LSX_SERVER_HOSTNAME = window?.__env?.lsxServerHostname != null ? `${window.__env.lsxServerHostname}` : 'localhost';
const LSX_SERVER_PORT = window?.__env?.lsxServerPort != null ? window.__env.lsxServerPort : 3000;

const REST_API_URL = `http://${window.location.host}`;
const WS_URL = `ws://${LSX_SERVER_HOSTNAME}:${LSX_SERVER_PORT}`;

export type LsxRequest = GetPowerGridState | GetPowerPlantState;

@Injectable({providedIn: 'root'})
export class BackendService {
    public onRequest: Subject<{id: string, request: Request}> = new Subject<{id: string, request: Request}>();
    public onMessage: Subject<LsxMessage> = new Subject<LsxMessage>();
    public onOpen: Subject<void> = new Subject<void>();
    public onClose: Subject<void> = new Subject<void>();

    private requests: Map<string, (value: Response) => void> = new Map<string, (value: Response) => void>();
    private ws!: WebSocketSubject<any>;

    constructor(private http: HttpClient) {

    }

    public async connect() {
        this.ws = webSocket({url: WS_URL, openObserver: { next: () => {this.onOpen.next()} }});

        this.ws.subscribe({
            next: this.handleMessage.bind(this),
            error: (err) => {console.log(err)},
            complete: this.handleClose.bind(this)
        });
    }

    public async getAnnouncementFiles(): Promise<string[]> {
        const req: Request = {
            getAnnouncementFiles: {}
        }

        const res: Response = await this.request(req);
        return res.getAnnouncementFiles!.files!;
    }

    public async getPowerGridState(): Promise<PowerGridState> {
        const req: Request = {
            getPowerGridState: {}
        }

        const res: Response = await this.request(req);
        return res.getPowerGridState!.state!;
    }

    public async setPowerGridState(state: PowerGridState) {
        const req: Request = {
            setPowerGridState: {state: state}
        }

        const res: Response = await this.request(req);
    }

    public async getPowerPlantState(): Promise<PowerPlantState> {
        const req: Request = {
            getPowerPlantState: {}
        }

        const res: Response = await this.request(req);
        return res.getPowerPlantState!.state!;
    }

    public async setPowerPlantState(state: PowerPlantState) {
        const req: Request = {
            setPowerPlantState: {state: state}
        }

        const res: Response = await this.request(req);
    }

    public request(req: Request): Promise<Response> {
        return new Promise((resolve, reject) => {
            const msg: LsxMessage = {
                id: uuidv4(),
                request: req
            }

            this.requests.set(msg.id, resolve.bind(this));
            setTimeout(this.rejectOnTimeout.bind(this, msg.id, reject), 5000);
            this.ws.next({event: 'msg', data: JSON.stringify(LsxMessage.toJSON(msg))});
        });

    }

    public respond(id: string, res: Response) {
        const msg: LsxMessage = {
            id: id,
            response: res
        }
        this.ws.next({event: 'msg', data: JSON.stringify(LsxMessage.toJSON(msg))});
    }

    private handleMessage(buffer: {event: 'msg', data: string}) {
        const msg = LsxMessage.fromJSON(JSON.parse(buffer.data));

        if(msg.request) {
            this.onRequest.next({id: msg.id, request: msg.request});
        }

        if(msg.response) {
            if(this.requests.has(msg.id)) {
                this.requests.get(msg.id)!(msg.response);
                this.requests.delete(msg.id);
            }
        }
        console.log(msg)

        this.onMessage.next(msg);
    }

    private handleClose() {
        this.onClose.next();
    }

    private rejectOnTimeout(id: string, reject: (reason?: any) => void) {
        if(this.requests.delete(id)) {
            reject();
        };
    }
}
