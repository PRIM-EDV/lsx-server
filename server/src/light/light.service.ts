import { Injectable } from '@nestjs/common';
import { QlcService } from 'src/dmx/qlc.service';
import { LightLineId, LightLineMode, Lightline } from './lightline/lightline';
import { PowerLineId } from 'proto/lsx.power';
import { ReactorService } from 'src/api/reactor/reactor.service';


@Injectable()
export class LightService {

    public lightlines =  new Map<LightLineId, Lightline>([
        [LightLineId.LINE_OG_BASE_ADM, new Lightline(0, 0, PowerLineId.LINE_OG_BASE_ADM)]
    ])

    constructor(dmx: QlcService) {
        Lightline.dmx = dmx;
    }

    public async setLightLines(mode: LightLineMode) {
        for (const [lineId, line] of this.lightlines) {
            switch(mode) {
                case LightLineMode.MODE_BLACKOUT:
                case LightLineMode.MODE_RED:
                case LightLineMode.MODE_WHITE:
                    // if ()
                    line.setStatic(mode); break;
                case LightLineMode.MODE_FLICKER:
                    line.setFlicker(); break;
            }
        }
    }
}