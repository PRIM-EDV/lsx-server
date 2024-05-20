import { Injectable } from '@nestjs/common';
import { LightLineId, LightLineMode, Lightline } from './lightline/lightline';
import { PowerLineId, PowerLineState } from 'proto/lsx.power';
import { QlcService } from 'src/platform/qlc/qlc.service';
import { StateService } from '../state/state.service';


@Injectable()
export class LightService {

    public lightlines =  new Map<LightLineId, Lightline>([
        [LightLineId.LINE_OG_BASE_ADM, new Lightline(7, 0, PowerLineId.LINE_OG_BASE_ADM)],
        [LightLineId.LINE_OG_BASE_CIC, new Lightline(5, 8, PowerLineId.LINE_OG_BASE_CIC)],
        [LightLineId.LINE_OG_BASE_HC, new Lightline(18, 19, PowerLineId.LINE_OG_BASE_HC)],
        [LightLineId.LINE_OG_BASE_MED, new Lightline(24, 25, PowerLineId.LINE_OG_BASE_MED)],
        [LightLineId.LINE_OG_BASE_SCI, new Lightline(12, 13, PowerLineId.LINE_OG_BASE_SCI, new Map([
            [LightLineMode.MODE_BLACKOUT, 0],
            [LightLineMode.MODE_RED, 2],
            [LightLineMode.MODE_WHITE, 1],
        ]))],
        [LightLineId.LINE_OG_BASE_TEC, new Lightline(29, 30, PowerLineId.LINE_OG_BASE_TEC)],
        [LightLineId.LINE_OG_COURTYARD, new Lightline(20, 21, PowerLineId.LINE_OG_COURTYARD)],
        [LightLineId.LINE_OG_GATE, new Lightline(3, 4, PowerLineId.LINE_OG_GATE)],
        [LightLineId.LINE_OG_MESSHALL, new Lightline(1, 2, PowerLineId.LINE_OG_MESSHALL)],
        [LightLineId.LINE_OG_LOG, new Lightline(22, 23, PowerLineId.LINE_OG_LOG)],
        [LightLineId.LINE_OG_HALL, new Lightline(15, 16, PowerLineId.LINE_OG_HALL)],
        [LightLineId.LINE_OG_PARCELS, new Lightline(27, 28, PowerLineId.LINE_OG_PARCELS, new Map([
            [LightLineMode.MODE_BLACKOUT, 0],
            [LightLineMode.MODE_WHITE, 1],
        ]))],
        [LightLineId.LINE_OG_TUNNEL, new Lightline(32, 33)],
        [LightLineId.LINE_UG_HALL, new Lightline(35, 36)],
        [LightLineId.LINE_UG_RWALL, new Lightline(41, 42)]
    ])

    constructor(private dmx: QlcService, private state: StateService) {
        Lightline.dmx = this.dmx;

        // Special
        this.lightlines.get(LightLineId.LINE_OG_BASE_CIC).specialCue = 9;
        this.lightlines.get(LightLineId.LINE_OG_BASE_SCI).specialCue = 14;
        this.lightlines.get(LightLineId.LINE_OG_HALL).specialCue = 17;
        this.lightlines.get(LightLineId.LINE_OG_BASE_MED).specialCue = 26;
        this.lightlines.get(LightLineId.LINE_OG_BASE_TEC).specialCue = 31;
        this.lightlines.get(LightLineId.LINE_OG_TUNNEL).specialCue = 34;
        
    }

    public getLightLines(): Array<Lightline> {
        const lightlines = [];

        for (const [lineId, line] of this.lightlines) {
            lightlines.push(line);
        }

        return lightlines;
    }

    public async setLightLines(mode: LightLineMode.MODE_BLACKOUT | LightLineMode.MODE_RED | LightLineMode.MODE_WHITE) {
        for (const [lineId, line] of this.lightlines) {
            await this.setLightLine(lineId, mode);
        }
    }

    public async setLightLine(id: LightLineId, mode: LightLineMode.MODE_BLACKOUT | LightLineMode.MODE_RED | LightLineMode.MODE_WHITE) {
        const line = this.lightlines.get(id)

        await line.setMode(mode);
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