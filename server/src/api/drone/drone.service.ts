import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { AppGateway } from 'src/gateway/app.gateway';
import { SoundService } from 'src/sound/sound.service';
import { QlcService } from 'src/dmx/qlc.service';
import { ModeSilentState } from 'proto/lsx.drone';

@Injectable()
export class DroneService {

    public modeSilentState: ModeSilentState = ModeSilentState.MODE_SILENT_STATE_NORMAL;

    constructor(private readonly gateway: AppGateway, private readonly sound: SoundService, private dmx: QlcService) {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));
    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if(event.request.getModeSilentState){
            this.gateway.respond(event.clientId, event.msgId, {getModeSilentState: {state: this.modeSilentState}})
        }

        if(event.request.setModeSilentState){
            this.setModeSilentState(event.request.setModeSilentState.state)
            this.gateway.respond(event.clientId, event.msgId, {setModeSilentState: {}})
        }
    }

    private async setModeSilentState(state: ModeSilentState) {
        const req: Request = {setModeSilentState: {state: state}};

        if (state != this.modeSilentState) {
            this.handleModeSilentStateChange(state);
            this.modeSilentState = state;
        }
   
        this.gateway.requestAll(req).then();
    }

    private handleModeSilentStateChange(state: ModeSilentState) {
        switch(state) {
            case ModeSilentState.MODE_SILENT_STATE_NORMAL:
                this.sound.playWav('assets/wav/drone/DROHNE-basismodus-silent-beendet.wav').then( () => {

                }
                ).catch((err) =>{console.log(err)}); break;
            case ModeSilentState.MODE_SILENT_STATE_SILENT:
                this.sound.playWav('assets/wav/drone/DROHNE-alarm.wav').then( () => {

                }
                ).catch((err) =>{console.log(err)}); break;
        }
    }
}