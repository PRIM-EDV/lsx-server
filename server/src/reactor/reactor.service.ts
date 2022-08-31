import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { PowerGridState, PowerPlantState, PowerLineState } from 'proto/lsx.power';
import { Subject } from 'rxjs';
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
        'ogBaseMed': PowerLineState.STATE_UNPOWERED,
        'ogParcelLeft': PowerLineState.STATE_UNPOWERED,
        'ogParcelRight': PowerLineState.STATE_UNPOWERED,
        'ugParcelLeft': PowerLineState.STATE_UNPOWERED,
        'ugParcelRight': PowerLineState.STATE_UNPOWERED
    }

    private powerPlantState: PowerPlantState = PowerPlantState.STATE_NORMAL;

    constructor(private readonly gateway: AppGateway, private readonly base: LockdownService, private readonly sound: SoundService) {
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

        this.powerGridState = state;
        this.onStateChange.next({
            powerGridState: this.powerGridState
        })
        this.gateway.requestAll(req).then();
    }
}
