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
    LINE_OG_LOG = 16,
    LINE_OG_TUNNEL= 17
}

export class Lightline {
    public static dmx: QlcService;

    public staticCue: number;
    public flickerCue: number;
    public specialCue?: number;
    public powerLineId : PowerLineId = 0;
    public mode: LightLineMode.MODE_BLACKOUT | LightLineMode.MODE_RED | LightLineMode.MODE_WHITE = LightLineMode.MODE_WHITE;
    public powered: boolean = true;
    public flicker: boolean = true;

    private mapping: LightLineMapping = new Map([
        [LightLineMode.MODE_BLACKOUT, 0],
        [LightLineMode.MODE_RED, 1],
        [LightLineMode.MODE_WHITE, 2],
    ])

    constructor(staticCue: number, flickerCue: number, powerLineId?: PowerLineId, mapping?: LightLineMapping) {
        this.staticCue = staticCue;
        this.flickerCue = flickerCue;

        this.powerLineId = powerLineId ? powerLineId : PowerLineId.LINE_EMPTY;
        this.mapping = mapping ? mapping : this.mapping;
    }

    public async setBlackout(blackout) {
        if (blackout) {
          if (this.specialCue) {
            await Lightline.dmx.setCue(this.specialCue, 'STOP');
          }
          await Lightline.dmx.setCue(this.flickerCue, 'STOP');
          await Lightline.dmx.setCue(this.staticCue, 'STEP', this.mapping.get(LightLineMode.MODE_BLACKOUT));
        } else {
          await this.setMode(this.mode);   
        }
    }

    public async setPower(power: boolean) {
        this.powered = power;

        if (power) {
            console.log(this.mode);
            await this.setMode(this.mode);   
        } else {
            if (this.specialCue) {
                await Lightline.dmx.setCue(this.specialCue, 'STOP');
              }
          await Lightline.dmx.setCue(this.flickerCue, 'STOP');
          await Lightline.dmx.setCue(this.staticCue, 'STEP', this.mapping.get(LightLineMode.MODE_BLACKOUT));
        }

    }

    public async setMode(mode: LightLineMode.MODE_BLACKOUT | LightLineMode.MODE_RED | LightLineMode.MODE_WHITE) {
        switch (mode) {
            case LightLineMode.MODE_BLACKOUT:
            case LightLineMode.MODE_RED:
            case LightLineMode.MODE_WHITE:
                await this.setStatic(mode);
        }
    }

    public async setStatic(mode: LightLineMode.MODE_BLACKOUT | LightLineMode.MODE_RED | LightLineMode.MODE_WHITE) {
        if (this.powered) {
            if (this.specialCue) {
                await Lightline.dmx.setCue(this.specialCue, 'STOP');
              }
            await Lightline.dmx.setCue(this.flickerCue, 'STOP');
            await Lightline.dmx.setCue(this.staticCue, 'STEP', this.mapping.get(mode));
        } else {
            if (this.specialCue) {
                await Lightline.dmx.setCue(this.specialCue, 'STOP');
              }
            await Lightline.dmx.setCue(this.flickerCue, 'STOP');
            await Lightline.dmx.setCue(this.staticCue, 'STEP', this.mapping.get(LightLineMode.MODE_BLACKOUT));
        }

        this.mode = mode;
    }

    public async setSpecial(special: boolean) {
        if (special && this.specialCue) {
            await Lightline.dmx.setCue(this.flickerCue, 'STOP');
            await Lightline.dmx.setCue(this.staticCue, 'STOP');
            await Lightline.dmx.setCue(this.specialCue, 'PLAY');
        } else {
            this.setStatic(this.mode);
        }
    }

    public async setFlicker(flicker: boolean) {
        if (this.powered) {
            if (flicker) {
                if (this.specialCue) {
                    await Lightline.dmx.setCue(this.specialCue, 'STOP');
                }
                await Lightline.dmx.setCue(this.staticCue, 'STOP');
                await Lightline.dmx.setCue(this.flickerCue, 'PLAY');
            } else {
                this.setStatic(this.mode);
            }
        }

        this.flicker = flicker;
    }
}