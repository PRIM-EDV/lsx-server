import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { BaseState } from 'proto/lsx.lockdown';
import { AppGateway } from 'src/gateway/app.gateway';

@Injectable()
export class LockdownService {

    private baseState: BaseState = BaseState.BASE_STATE_NORMAL;
    private autoLockdown = true;
    private lockdownAnnouncements = true;

    constructor(private readonly gateway: AppGateway) {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));
    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if(event.request.getBaseState){
            this.gateway.respond(event.clientId, event.msgId, {getBaseState: {state: this.baseState}})
        }
        if(event.request.setBaseState){
            this.setBaseState(event.request.setBaseState.state)
            this.gateway.respond(event.clientId, event.msgId, {setBaseState: {}})
        }
        if(event.request.getAutoLockdown){
            this.gateway.respond(event.clientId, event.msgId, {getAutoLockdown: {state: this.autoLockdown}})
        }
        if(event.request.setAutoLockdown){
            this.setAutoLockdown(event.request.setAutoLockdown.state)
            this.gateway.respond(event.clientId, event.msgId, {setAutoLockdown: {}})
        }
        if(event.request.getLockdownAnnouncements){
            this.gateway.respond(event.clientId, event.msgId, {getLockdownAnnouncements: {state: this.lockdownAnnouncements}})
        }
        if(event.request.setLockdownAnnouncements){
            this.setLockdownAnnouncements(event.request.setLockdownAnnouncements.state)
            this.gateway.respond(event.clientId, event.msgId, {setLockdownAnnouncements: {}})
        }
    }

    public setBaseState(state: BaseState) {
        const req: Request = {setBaseState: {state: state}};

        this.baseState = state;
        this.gateway.requestAll(req).then();
    }

    public setAutoLockdown(state: boolean) {
        const req: Request = {setAutoLockdown: {state: state}};

        this.autoLockdown = state;
        this.gateway.requestAll(req).then();
    }

    public setLockdownAnnouncements(state: boolean) {
        const req: Request = {setLockdownAnnouncements: {state: state}};

        this.lockdownAnnouncements = state;
        this.gateway.requestAll(req).then();
    }
}
