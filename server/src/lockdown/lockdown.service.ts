import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { BaseState } from 'proto/lsx.lockdown';
import { AppGateway } from 'src/gateway/app.gateway';
import { SoundService } from 'src/sound/sound.service';

@Injectable()
export class LockdownService {

    private baseState: BaseState = BaseState.BASE_STATE_NORMAL;
    private autoLockdown = true;
    private lockdownAnnouncements = true;

    constructor(private readonly gateway: AppGateway, private readonly sound: SoundService) {
        setInterval(this.lockdownAnnoucementsInterval.bind(this), 1000);
        setInterval(this.autoLockdownInterval.bind(this), 1000);

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

        this.handleBaseStateChange(state);
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

    private handleBaseStateChange(state: BaseState) {
        switch(state) {
            case BaseState.BASE_STATE_NORMAL:
                this.sound.playWav('assets/wav/lockdown-timer/lockdown-vorbei.wav').then(

                ).catch(

                );break;
            case BaseState.BASE_STATE_LOCKDOWN:
                this.sound.playWav('assets/wav/lockdown-timer/lockdown-now.wav').then(

                ).catch(

                );break;
        }
    }

    private lockdownAnnoucementsInterval() {
        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();

        if (this.lockdownAnnouncements) {
            if (minutes == 0 && seconds == 0) {
                switch(hours) {
                    case 0: this.sound.playWav('assets/wav/lockdown-timer/lockdown-3h.wav'); break;
                    case 1: this.sound.playWav('assets/wav/lockdown-timer/lockdown-2h.wav'); break;
                    case 2: this.sound.playWav('assets/wav/lockdown-timer/lockdown-1h.wav'); break;
                    case 10: this.sound.playWav('assets/wav/lockdown-timer/lockdown-17h.wav'); break;
                    case 11: this.sound.playWav('assets/wav/lockdown-timer/lockdown-16h.wav'); break;
                    case 12: this.sound.playWav('assets/wav/lockdown-timer/lockdown-15h.wav'); break;
                    case 13: this.sound.playWav('assets/wav/lockdown-timer/lockdown-14h.wav'); break;
                    case 14: this.sound.playWav('assets/wav/lockdown-timer/lockdown-13h.wav'); break;
                    case 15: this.sound.playWav('assets/wav/lockdown-timer/lockdown-12h.wav'); break;
                    case 16: this.sound.playWav('assets/wav/lockdown-timer/lockdown-11h.wav'); break;
                    case 17: this.sound.playWav('assets/wav/lockdown-timer/lockdown-10h.wav'); break;
                    case 18: this.sound.playWav('assets/wav/lockdown-timer/lockdown-9h.wav'); break;
                    case 19: this.sound.playWav('assets/wav/lockdown-timer/lockdown-8h.wav'); break;
                    case 20: this.sound.playWav('assets/wav/lockdown-timer/lockdown-7h.wav'); break;
                    case 21: this.sound.playWav('assets/wav/lockdown-timer/lockdown-6h.wav'); break;
                    case 22: this.sound.playWav('assets/wav/lockdown-timer/lockdown-5h.wav'); break;
                    case 23: this.sound.playWav('assets/wav/lockdown-timer/lockdown-4h.wav'); break;
                }
            } else if (hours == 2 && seconds == 0) {
                switch(minutes) {
                    case 30: this.sound.playWav('assets/wav/lockdown-timer/lockdown-30m.wav'); break;
                    case 55: this.sound.playWav('assets/wav/lockdown-timer/lockdown-5m.wav'); break;
                }
            }
        }
    }

    private autoLockdownInterval() {
        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();

        if (this.autoLockdown) {
            if (minutes == 0 && seconds == 0) {
                switch(hours) {
                    case 3: this.setBaseState(BaseState.BASE_STATE_LOCKDOWN); break;
                    case 9: this.setBaseState(BaseState.BASE_STATE_NORMAL); break;
                }
            }
        }
    }
}
