import { Injectable } from '@nestjs/common';
import { Lightline } from './lightline/lightline';
import { QlcService } from 'src/platform/qlc/qlc.service';
import { StateService } from '../state/state.service';
import { LightDMXState, LightId, LightSwitchState } from 'proto/lsx.light';
import { PowerState } from 'proto/lsx.power';
import { LockState } from 'proto/lsx.common';


@Injectable()
export class LightService {

    public lightlines =  new Map<LightId, Lightline>([
        [LightId.LIGHT_OG_BASE_ADM, new Lightline(7, 0, LightId.LIGHT_OG_BASE_ADM)],
        [LightId.LIGHT_OG_BASE_CIC, new Lightline(5, 8, LightId.LIGHT_OG_BASE_CIC)],
        [LightId.LIGHT_OG_BASE_HC, new Lightline(18, 19, LightId.LIGHT_OG_BASE_HC)],
        [LightId.LIGHT_OG_BASE_MED, new Lightline(24, 25, LightId.LIGHT_OG_BASE_MED)],
        [LightId.LIGHT_OG_BASE_SCI, new Lightline(12, 13, LightId.LIGHT_OG_BASE_SCI, new Map([
            [LightDMXState.DMX_STATE_OFF, 0],
            [LightDMXState.DMX_STATE_RED, 2],
            [LightDMXState.DMX_STATE_WHITE, 1],
        ]))],
        [LightId.LIGHT_OG_BASE_TEC, new Lightline(29, 30, LightId.LIGHT_OG_BASE_TEC)],
        [LightId.LIGHT_OG_COURTYARD, new Lightline(20, 21, LightId.LIGHT_OG_COURTYARD)],
        [LightId.LIGHT_OG_GATE, new Lightline(3, 4, LightId.LIGHT_OG_GATE)],
        [LightId.LIGHT_OG_MESSHALL, new Lightline(1, 2, LightId.LIGHT_OG_MESSHALL)],
        [LightId.LIGHT_OG_LOG, new Lightline(22, 23, LightId.LIGHT_OG_LOG)],
        [LightId.LIGHT_OG_HALL, new Lightline(15, 16, LightId.LIGHT_OG_HALL)],
        [LightId.LIGHT_OG_PARCELS, new Lightline(27, 28, LightId.LIGHT_OG_PARCELS, new Map([
            [LightDMXState.DMX_STATE_OFF, 0],
            [LightDMXState.DMX_STATE_WHITE, 1],
        ]))],
        // [LightId.LIGHT_OG_TUNNEL, new Lightline(32, 33)],
        // [LightId.LIGHT_UG_HALL, new Lightline(35, 36)],
        // [LightId.LIGHT_UG_RWALL, new Lightline(41, 42)]
    ])

    constructor(private dmx: QlcService, private state: StateService) {
        Lightline.dmx = this.dmx;

        // Special
        // this.lightlines.get(LightId.LIGHT_OG_BASE_CIC).specialCue = 9;
        // this.lightlines.get(LightId.LIGHT_OG_BASE_SCI).specialCue = 14;
        // this.lightlines.get(LightId.LIGHT_OG_HALL).specialCue = 17;
        // this.lightlines.get(LightId.LIGHT_OG_BASE_MED).specialCue = 26;
        // this.lightlines.get(LightId.LIGHT_OG_BASE_TEC).specialCue = 31;
        // this.lightlines.get(LightId.LIGHT_OG_TUNNEL).specialCue = 34;
        
    }

    public async setLightDMXState(id: LightId, state: LightDMXState) { 
    
    }

    public async setPowerState(id: LightId, state: PowerState) {
        const line = this.lightlines.get(id);
        await line.setPowerState(state);
    }

    public getLightSwitchState(id: LightId): LightSwitchState {
        const line = this.lightlines.get(id);
        return line.switchState;
    }

    public async setLightSwitchState(id: LightId, state: LightSwitchState) { 
        const line = this.lightlines.get(id);
        await line.setSwitchState(state);
    }

    public getLightLockState(id: LightId): LockState {
        const line = this.lightlines.get(id);
        return line.lockState;
    }

    public setLightLockState(id: LightId, state: LockState) {
        const line = this.lightlines.get(id);
        line.lockState = state;
    }

    public getLightLines(): Lightline[] {
        return Array.from(this.lightlines.values());
    }

    // public async setLightLines(mode: LightLineMode.MODE_BLACKOUT | LightLineMode.MODE_RED | LightLineMode.MODE_WHITE) {
    //     // for (const [lineId, line] of this.lightlines) {
    //     //     await this.setLightLine(lineId, mode);
    //     // }
    // }

    // public async setLightLine(id: LightId, mode: LightLineMode.MODE_BLACKOUT | LightLineMode.MODE_RED | LightLineMode.MODE_WHITE) {
    //     // const line = this.lightlines.get(id)

    //     // await line.setMode(mode);
    // }

    // public async getLightLineByLightId(LightId: any): Promise<Lightline> {
    //     // for (const [lineId, line] of this.lightlines) {
    //     //     if (line.LightId == LightId) {
    //     //         return line;
    //     //     }
    //     // }

    //     throw new Error("No Lightline could be found!");
    // }
}