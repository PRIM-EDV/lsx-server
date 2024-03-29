import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { LockdownState } from 'proto/lsx.lockdown';
import { AppGateway } from 'src/gateway/app.gateway';
import { SoundService } from 'src/sound/sound.service';
import { QlcService } from 'src/dmx/qlc.service';
import { DroneService } from 'src/api/drone/Drone.service';
import { ModeSilentState } from 'proto/lsx.drone';

@Injectable()
export class LockdownService {

    private lockdownState: LockdownState = LockdownState.LOCKDOWN_STATE_NORMAL;
    private autoLockdown = true;
    private lockdownAnnouncements = true;

    constructor(private readonly gateway: AppGateway, private readonly sound: SoundService, private dmx: QlcService, private readonly drone: DroneService) {
        setInterval(this.lockdownAnnoucementsInterval.bind(this), 1000);
        setInterval(this.autoLockdownInterval.bind(this), 1000);

        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));
    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if(event.request.getLockdownState){
            this.gateway.respond(event.clientId, event.msgId, {getLockdownState: {state: this.lockdownState}})
        }
        if(event.request.setLockdownState){
            this.setBaseState(event.request.setLockdownState.state)
            this.gateway.respond(event.clientId, event.msgId, {setLockdownState: {}})
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

    public setBaseState(state: LockdownState) {
        const req: Request = {setLockdownState: {state: state}};

        this.handleBaseStateChange(state);
        this.lockdownState = state;
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

    private async handleBaseStateChange(state: LockdownState) {
        switch(state) {
            case LockdownState.LOCKDOWN_STATE_NORMAL:
                if(this.lockdownAnnouncements) {
                    this.sound.playWav('assets/wav/lockdown-timer/lockdown-vorbei.wav').then( () => {
                        for(const i of [12, 6, 8, 11, 13, 18, 16, 20, 21, 32, 25, 33, 37, 39]) {
                            this.dmx.setCue(i, 'STOP').catch((err) =>{console.log(err)});
                        }
                        for(const i of [5, 14, 15, 4, 7, 9, 10, 17, 19, 22, 23, 38, 34, 35, 40]) {
                            this.dmx.setCue(i, "STEP", 2).catch((err) =>{console.log(err)});
                        }
                        this.dmx.setCue(36, "STEP", 1).catch((err) =>{console.log(err)});

                    }
                    ).catch((err) =>{console.log(err)});
                } else {
                    for(const i of [12, 6, 8, 11, 13, 18, 16, 20, 21, 32, 25, 33, 37, 39]) {
                        this.dmx.setCue(i, 'STOP').catch((err) =>{console.log(err)});
                    }
                    for(const i of [5, 14, 15, 4, 7, 9, 10, 17, 19, 22, 23, 38, 34, 35, 40]) {
                        this.dmx.setCue(i, "STEP", 2).catch((err) =>{console.log(err)});
                    }
                    this.dmx.setCue(36, "STEP", 1).catch((err) =>{console.log(err)});
                } break;

            case LockdownState.LOCKDOWN_STATE_LOCKDOWN:
                if (this.lockdownAnnouncements) {

                    this.sound.playWav('assets/wav/lockdown-timer/lockdown-now.wav').then( () => {
                        for(const i of [12, 6, 8, 11, 13, 18, 16, 20, 21, 32, 25, 33, 37, 39]) {
                            this.dmx.setCue(i, 'STOP').catch((err) => console.log(err));
                        }
                        for(const i of [5, 14, 15, 4, 7, 9, 10, 17, 19, 22, 23, 38, 34, 35, 40]) {
                            this.dmx.setCue(i, "STEP", 1).catch((err) => console.log(err));
                        }
                        this.dmx.setCue(36, "STEP", 0).catch((err) => console.log(err));
                    }
                    ).catch((err) =>{console.log(err)});
                } else {
                    for(const i of [12, 6, 8, 11, 13, 18, 16, 20, 21, 32, 25, 33, 37, 39]) {
                        this.dmx.setCue(i, 'STOP').catch((err) =>{console.log(err)});
                    }

                    for(const i of [5, 14, 15, 4, 7, 9, 10, 17, 19, 22, 23, 38, 34, 35, 40]) {
                        this.dmx.setCue(i, "STEP", 1).catch((err) =>{console.log(err)});
                    }
                    this.dmx.setCue(36, "STEP", 0).catch((err) =>{console.log(err)});
                } break;

        }
    }

    private lockdownAnnoucementsInterval() {
        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();

        if (this.lockdownAnnouncements && this.drone.modeSilentState == ModeSilentState.MODE_SILENT_STATE_NORMAL) {
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
                    case 3: this.setBaseState(LockdownState.LOCKDOWN_STATE_LOCKDOWN); break;
                    case 9: this.setBaseState(LockdownState.LOCKDOWN_STATE_NORMAL); break;
                }
            }
        }
    }
}
