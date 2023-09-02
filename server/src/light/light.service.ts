import { Injectable } from '@nestjs/common';
import { QlcService } from 'src/dmx/qlc.service';
import { LightLineId, LightLineMode, Lightline } from './lightline/lightline';
import { PowerLineId, PowerLineState } from 'proto/lsx.power';
import { StateService } from 'src/state/state.service';


@Injectable()
export class LightService {

    public lightlines =  new Map<LightLineId, Lightline>([
        [LightLineId.LINE_OG_BASE_ADM, new Lightline(0, 0, PowerLineId.LINE_OG_BASE_ADM)]
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