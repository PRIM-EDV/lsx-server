import { PowerLineId } from "proto/lsx.power";
import { QlcService } from "src/dmx/qlc.service";


export enum LightLineMode {
    MODE_BLACKOUT = 1,
    MODE_WHITE = 2,
    MODE_RED = 3,
    MODE_FLICKER = 4
}

export type LightLineMapping = Map<LightLineMode, number>;

export enum LightLineId {
    LINE_EMPTY = 0,
    LINE_OG_BASE_MED = 1,
    LINE_OG_BASE_ADM = 2,
    LINE_OG_BASE_CIC = 3,
    LINE_OG_BASE_SCI = 4,
    LINE_OG_BASE_TEC = 5,
    LINE_OG_BASE_HC = 7,
    LINE_OG_HALL = 8,
    LINE_OG_COURTYARD = 9,
    LINE_OG_MESSHALL = 10,
    LINE_OG_GATE = 11,
    LINE_OG_PARCELS = 12,
    LINE_UG_PARCELS_LEFT = 13,
    LINE_UG_PARCELS_RIGHT = 14,
    LINE_UG_HALL = 15,
    LINE_OG_LOG = 16
}

export class Lightline {
    public static dmx: QlcService;

    public staticCue: number;
    public flickerCue: number;
    public powerLineId : PowerLineId = 0;
    public mode: LightLineMode = LightLineMode.MODE_WHITE;

    private mapping: LightLineMapping = new Map([
        [LightLineMode.MODE_BLACKOUT, 1],
        [LightLineMode.MODE_RED, 2],
        [LightLineMode.MODE_WHITE, 3],
    ])

    constructor(staticCue: number, flickerCue: number, powerLineId?: PowerLineId, mapping?: LightLineMapping) {
        this.staticCue = staticCue;
        this.flickerCue = flickerCue;

        this.powerLineId = powerLineId ? powerLineId : PowerLineId.LINE_EMPTY;
        this.mapping = mapping ? mapping : this.mapping;
    }

    public async setPower(power: boolean) {
        if (power) {
         this.setMode(this.mode);   
        } else {
          await Lightline.dmx.setCue(this.flickerCue, 'STOP');
          await Lightline.dmx.setCue(this.staticCue, 'STEP', this.mapping[LightLineMode.MODE_BLACKOUT]);
        }
    }

    public setMode(mode: LightLineMode) {
        switch (mode) {
            case LightLineMode.MODE_BLACKOUT:
            case LightLineMode.MODE_RED:
            case LightLineMode.MODE_WHITE:
                this.setStatic(this.mode);
            case LightLineMode.MODE_FLICKER:
                this.setFlicker(true);
        }
    }

    public async setStatic(mode: LightLineMode) {
        await Lightline.dmx.setCue(this.flickerCue, 'STOP');
        await Lightline.dmx.setCue(this.staticCue, 'STEP', this.mapping[mode]);
        this.mode = mode;
    }

    public async setFlicker(flicker: boolean) {
        if (flicker) {
            await Lightline.dmx.setCue(this.staticCue, 'STOP');
            await Lightline.dmx.setCue(this.flickerCue, 'PLAY');
        } else {
            this.setStatic(this.mode);
        }
    }
}