import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { PowerPlantState, PowerLineState, PowerLineId } from 'proto/lsx.power';
import { QlcService } from 'src/dmx/qlc.service';
import { AppGateway } from 'src/gateway/app.gateway';
import { LightService } from 'src/light/light.service';
import { StateService } from 'src/state/state.service';

@Injectable()
export class ReactorService {

    constructor(
        private readonly state: StateService,
        private readonly gateway: AppGateway, 
        private readonly dmx: QlcService, 
        private light: LightService 
    ) {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));
    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if(event.request.getPowerLineState){
            this.gateway.respond(event.clientId, event.msgId, {getPowerLineState: {state: this.getPowerLineState(event.request.getPowerLineState.id)}})
        }
        if(event.request.setPowerLineState){
            this.setPowerLineState(event.request.setPowerLineState.id, event.request.setPowerLineState.state)
            this.gateway.respond(event.clientId, event.msgId, {setPowerLineState: {}})
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
        return this.state.powerPlantState;
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

        this.state.powerPlantState = state;
        this.gateway.requestAll(req).then();
    }

    public getPowerLineState(id: PowerLineId): PowerLineState {
        return this.state.powerLineStates.get(id);
    }

    public setPowerLineState(id: PowerLineId, state: PowerLineState) {
        const req: Request = {setPowerLineState: {id: id, state: state}};

        this.state.powerLineStates.set(id, state);

        // this.onStateChange.next({
        //     powerGridState: this.powerGridState
        // })

        this.gateway.requestAll(req).then();
    }

    // private powerPlantHandler(state: )
}
