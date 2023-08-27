import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { PowerGridState, PowerPlantState, PowerLineState } from 'proto/lsx.power';
import { Subject } from 'rxjs';
import { QlcService } from 'src/dmx/qlc.service';
import { AppGateway } from 'src/gateway/app.gateway';
import { LockdownService } from 'src/lockdown/lockdown.service';
import { SoundService } from 'src/sound/sound.service';

export interface ReactorStates {
    powerGridState?: PowerGridState,
    powerPlantState?: PowerPlantState
}

@Injectable()
export class ReactorService {

    public onStateChange: Subject<ReactorStates> = new Subject<ReactorStates>();

    private powerGridState: PowerGridState = {
        'ogBaseMed': PowerLineState.STATE_POWERED,
        'ogParcelLeft': PowerLineState.STATE_POWERED,
        'ogParcelRight': PowerLineState.STATE_POWERED,
        'ugParcelLeft': PowerLineState.STATE_POWERED,
        'ugParcelRight': PowerLineState.STATE_POWERED,
        'ogBaseAdm': PowerLineState.STATE_POWERED,
        'ogBaseCic': PowerLineState.STATE_POWERED,
        'ogBaseSci': PowerLineState.STATE_POWERED,
        'ogBaseTec': PowerLineState.STATE_POWERED,
    }

    private powerPlantState: PowerPlantState = PowerPlantState.STATE_NORMAL;

    constructor(private readonly gateway: AppGateway, private readonly base: LockdownService, private readonly sound: SoundService, private readonly dmx: QlcService) {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));
    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if(event.request.getPowerGridState){
            this.gateway.respond(event.clientId, event.msgId, {getPowerGridState: {state: this.getPowerGridState()}})
        }
        if(event.request.setPowerGridState){
            this.setPowerGridState(event.request.setPowerGridState.state)
            this.gateway.respond(event.clientId, event.msgId, {setPowerGridState: {}})
        }
        if(event.request.getPowerPlantState){
            this.gateway.respond(event.clientId, event.msgId, {getPowerPlantState: {state: this.getPowerPlantState()}})
        }
        if(event.request.setPowerPlantState){
            this.setPowerPlantState(event.request.setPowerPlantState.state)
            this.gateway.respond(event.clientId, event.msgId, {setPowerPlantState: {}})
        }
    }

    public getPowerPlantState(): PowerPlantState {
        return this.powerPlantState;
    }

    public setPowerPlantState(state: PowerPlantState) {
        const req: Request = {setPowerPlantState: {state: state}};

        if(state == PowerPlantState.STATE_CRITICAL) {
            for(const i of [5, 34, 14, 4, 22, 38, 36, 40]) {
                this.dmx.setCue(i, "STOP");
            }
            for(const i of [18, 33, 6, 12, 20, 32, 25, 39]) {
                this.dmx.setCue(i, "PLAY");
            }
            // for(const i of [5, 14, 15, 4, 7, 9, 10, 17, 19, 22, 23, 38, 34, 35, 40]) {
            //     this.dmx.setCue(i, "STOP");
            // }
            // for(const i of [12, 6, 8, 11, 13, 18, 16, 20, 21, 32, 25, 33, 37, 39]) {
            //     this.dmx.setCue(i, 'PLAY');
            // }
        }

        if(state == PowerPlantState.STATE_NORMAL) {
            for(const i of [18, 33, 6, 12, 20, 32, 25, 39]) {
                this.dmx.setCue(i, "STOP");
            }
            for(const i of [5, 34, 14, 4, 22, 38, 40]) {
                this.dmx.setCue(i, "STEP", 2);
            }
            // for(const i of [12, 6, 8, 11, 13, 18, 16, 20, 21, 32, 25, 33, 37, 39]) {
            //     this.dmx.setCue(i, 'STOP');
            // }
            // for(const i of [5, 14, 15, 4, 7, 9, 10, 17, 19, 22, 23, 38, 34, 35, 40]) {
            //     this.dmx.setCue(i, "STEP", 2);
            // }
            this.dmx.setCue(36, "STEP", 1);
        }



        this.powerPlantState = state;
        this.onStateChange.next({
            powerPlantState: this.powerPlantState
        })

        this.gateway.requestAll(req).then();
    }

    public getPowerGridState(): PowerGridState {
        return this.powerGridState;
    }

    public setPowerGridState(state: PowerGridState) {
        const req: Request = {setPowerGridState: {state: state}};

        console.log(this.powerGridState);

        this.powerGridState = state;
        this.onStateChange.next({
            powerGridState: this.powerGridState
        })
        this.gateway.requestAll(req).then();
    }

    // private powerPlantHandler(state: )
}
