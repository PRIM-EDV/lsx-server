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
            this.setPowerLineState(event.request.setPowerLineState.id, event.request.setPowerLineState.state).then().catch((err) => {
                console.log(err)
            })
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
        }

        if(state == PowerPlantState.STATE_NORMAL) {
        }

        this.state.powerPlantState = state;
        this.gateway.requestAll(req).then();
    }

    public getPowerLineState(id: PowerLineId): PowerLineState {
        return this.state.powerLineStates.get(id);
    }

    public async setPowerLineState(id: PowerLineId, state: PowerLineState) {
        const req: Request = {setPowerLineState: {id: id, state: state}};
        const lightline = await this.light.getLightLineByPowerLineId(id);

        this.state.powerLineStates.set(id, state);
        if (state == PowerLineState.STATE_POWERED) {
            await lightline.setPower(true);
        } else {
            await lightline.setPower(false);
        }

        this.gateway.requestAll(req).then();
    }

    // private powerPlantHandler(state: )
}
