import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { AppGateway } from 'src/gateway/app.gateway';
import { SoundService } from 'src/sound/sound.service';
import { BombAreaId, BombAreaState, ModeSilentState } from 'proto/lsx.drone';
import { LightService } from 'src/light/light.service';
import { LightLineId, LightLineMode } from 'src/light/lightline/lightline';
import { StateService } from 'src/state/state.service';
import { PowerLineId } from 'proto/lsx.power';

@Injectable()
export class DroneService {


    private bombFiles = [
        'assets/wav/drone/Drone_explosion_01.wav',
        'assets/wav/drone/Drone_explosion_02.wav',
        'assets/wav/drone/Drone_explosion_03.wav'
    ]

    constructor(
        private readonly gateway: AppGateway, 
        private readonly sound: SoundService, 
        private readonly light: LightService, 
        private readonly state: StateService
    ) {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));
    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if(event.request.getModeSilentState){
            this.gateway.respond(event.clientId, event.msgId, {getModeSilentState: {state: this.state.modeSilentState}})
        }

        if(event.request.setModeSilentState){
            this.setModeSilentState(event.request.setModeSilentState.state)
            this.gateway.respond(event.clientId, event.msgId, {setModeSilentState: {}})
        }

        if(event.request.getBombAreaState) {
            const id = event.request.getBombAreaState.id;
            this.gateway.respond(event.clientId, event.msgId, { 
                getBombAreaState: { state: this.state.bombAreaStates.get(id) }
            });
        }

        if(event.request.bombArea) {
            const id = event.request.bombArea.id;

            this.handleBombArea(id).then().catch((err) => {console.log(err)})
            this.gateway.respond(event.clientId, event.msgId, { 
                bombArea: { id: id }
            });

            this.gateway.requestAll(event.request);
        }
    }

    private async setModeSilentState(state: ModeSilentState) {
        const req: Request = {setModeSilentState: {state: state}};

        if (state != this.state.modeSilentState) {
            this.handleModeSilentStateChange(state);
            this.state.modeSilentState = state;
        }
   
        this.gateway.requestAll(req).then();
    }

    private getLightLineByBombAreaId(id: BombAreaId): LightLineId {
        switch(id) {
            case BombAreaId.AREA_CIC:
                return LightLineId.LINE_OG_BASE_CIC;
            case BombAreaId.AREA_HALL:
                return LightLineId.LINE_OG_HALL;
            case BombAreaId.AREA_MED:
                return LightLineId.LINE_OG_BASE_MED;
            case BombAreaId.AREA_SCI:
                return LightLineId.LINE_OG_BASE_SCI;
            case BombAreaId.AREA_TEC:
                return LightLineId.LINE_OG_BASE_TEC;
            case BombAreaId.AREA_TUNNEL:
                return LightLineId.LINE_OG_TUNNEL;
        }
    }

    private async handleBombArea(id: BombAreaId) {
        const lightLineId = this.getLightLineByBombAreaId(id);
        const lightLine = await this.light.lightlines.get(lightLineId);

        this.state.bombAreaStates.set(id, BombAreaState.STATE_FUSED);

        this.sound.playWav(this.bombFiles[Math.floor(Math.random() * this.bombFiles.length)]).then();
        await lightLine.setSpecial(true);  
    }

    private handleModeSilentStateChange(state: ModeSilentState) {
        switch(state) {
            case ModeSilentState.MODE_SILENT_STATE_NORMAL:
                if (this.state.modeSilentState == ModeSilentState.MODE_SILENT_STATE_SILENT_DRONE) {
                    this.sound.playWav('assets/wav/drone/DROHNE-basismodus-silent-beendet.wav').then( () => {
                        this.light.setLightLines(LightLineMode.MODE_WHITE).then().catch((err) => console.log(err));
                    }
                    ).catch((err) =>{console.log(err)});
                } else {
                    this.light.setLightLines(LightLineMode.MODE_WHITE).then().catch((err) => console.log(err));
                }
                break;
            case ModeSilentState.MODE_SILENT_STATE_SILENT_DRONE:
                this.sound.playWav('assets/wav/drone/DROHNE-alarm.wav').then( () => {
                    this.light.setLightLines(LightLineMode.MODE_RED).then().catch((err) => console.log(err));
                }
                ).catch((err) =>{console.log(err)}); break;
            case ModeSilentState.MODE_SILENT_STATE_SILENT:
                this.light.setLightLines(LightLineMode.MODE_RED).then().catch((err) => console.log(err));
                break;
        }
    }
}