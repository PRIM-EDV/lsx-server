import { Injectable } from '@nestjs/common';
import { QlcService } from 'src/dmx/qlc.service';
import { LightLineId, LightLineMode, Lightline } from './lightline/lightline';
import { PowerLineId, PowerLineState } from 'proto/lsx.power';
import { StateService } from 'src/state/state.service';


@Injectable()
export class LightService {

    public lightlines =  new Map<LightLineId, Lightline>([
        [LightLineId.LINE_OG_BASE_ADM, new Lightline(0, 0, PowerLineId.LINE_OG_BASE_ADM)],
        [LightLineId.LINE_OG_BASE_CIC, new Lightline(0, 0, PowerLineId.LINE_OG_BASE_CIC)],
        [LightLineId.LINE_OG_BASE_HC, new Lightline(0, 0, PowerLineId.LINE_OG_BASE_HC)],
        [LightLineId.LINE_OG_BASE_MED, new Lightline(0, 0, PowerLineId.LINE_OG_BASE_MED)],
        [LightLineId.LINE_OG_BASE_SCI, new Lightline(0, 0, PowerLineId.LINE_OG_BASE_SCI)],
        [LightLineId.LINE_OG_BASE_TEC, new Lightline(0, 0, PowerLineId.LINE_OG_BASE_TEC)],
        [LightLineId.LINE_OG_COURTYARD, new Lightline(0, 0, PowerLineId.LINE_OG_COURTYARD)],
        [LightLineId.LINE_OG_GATE, new Lightline(0, 0, PowerLineId.LINE_OG_GATE)],
        [LightLineId.LINE_OG_MESSHALL, new Lightline(0, 0, PowerLineId.LINE_OG_MESSHALL)],
        [LightLineId.LINE_OG_LOG, new Lightline(0, 0, PowerLineId.LINE_OG_LOG)],
        [LightLineId.LINE_OG_HALL, new Lightline(0, 0)]
    ])

    constructor(private dmx: QlcService, private state: StateService) {
        Lightline.dmx = this.dmx;
    }

    public async setLightLines(mode: LightLineMode) {
        for (const [lineId, line] of this.lightlines) {
            await this.setLightLine(lineId, mode);
        }
    }

    public async setLightLine(id: LightLineId, mode: LightLineMode) {
        const line = this.lightlines.get(id)

        switch(mode) {
            case LightLineMode.MODE_BLACKOUT:
                await line.setStatic(mode); break;
            case LightLineMode.MODE_RED:
            case LightLineMode.MODE_WHITE:
                if (this.state.powerLineStates.get(line.powerLineId) == PowerLineState.STATE_POWERED) {
                    await line.setStatic(mode); 
                }
                break;
            case LightLineMode.MODE_FLICKER:
                if (this.state.powerLineStates.get(line.powerLineId) == PowerLineState.STATE_POWERED) {
                    await line.setFlicker();
                } 
                break;
        }
    }

    public async getLightLineByPowerLineId(powerLineId: PowerLineId): Promise<Lightline> {
        for (const [lineId, line] of this.lightlines) {
            if (line.powerLineId == powerLineId) {
                return line;
            }
        }

        throw new Error("No Lightline could be found!");
    }
}