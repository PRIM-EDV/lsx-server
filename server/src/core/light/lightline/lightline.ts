import { LightDMXState, LightId, LightSwitchState } from "proto/lsx.light";
import { PowerState } from "proto/lsx.power";
import { QlcService } from "src/platform/qlc/qlc.service";

export type LightDMXStates = Map<LightDMXState, number>;

export class Lightline {
    public static dmx: QlcService;
    public id: LightId;
    public staticCue: number;
    public flickerCue: number;
    public specialCue?: number;

    public dmxState: LightDMXState.DMX_STATE_OFF | LightDMXState.DMX_STATE_RED | LightDMXState.DMX_STATE_WHITE = LightDMXState.DMX_STATE_OFF;
    public powerState: PowerState = PowerState.POWER_STATE_POWERED;
    public switchState: LightSwitchState = LightSwitchState.SWITCH_STATE_ON;

    public flicker: boolean = true;

    private dmxStates: LightDMXStates = new Map([
        [LightDMXState.DMX_STATE_OFF, 0],
        [LightDMXState.DMX_STATE_RED, 1],
        [LightDMXState.DMX_STATE_WHITE, 2],
    ])

    constructor(staticCue: number, flickerCue: number, id?: LightId, states?: LightDMXStates) {
        this.staticCue = staticCue;
        this.flickerCue = flickerCue;

        this.id = id ? id : LightId.LIGHT_EMPTY;
        this.dmxStates = states ? states : this.dmxStates;
    }

    public async setBlackout(blackout) {
        if (blackout) {
          if (this.specialCue) {
            await Lightline.dmx.setCue(this.specialCue, 'STOP');
          }
          await Lightline.dmx.setCue(this.flickerCue, 'STOP');
          await Lightline.dmx.setCue(this.staticCue, 'STEP', this.dmxStates.get(LightDMXState.DMX_STATE_OFF));
        } else {
          await this.setDmxState(this.dmxState);   
        }
    }

    public async setPowerState(power: PowerState) {
        this.powerState = power;

        if (power && this.switchState === LightSwitchState.SWITCH_STATE_ON) {
            await this.setDmxState(this.dmxState);   
        } else {
            if (this.specialCue) {
                await Lightline.dmx.setCue(this.specialCue, 'STOP');
              }
          await Lightline.dmx.setCue(this.flickerCue, 'STOP');
          await Lightline.dmx.setCue(this.staticCue, 'STEP', this.dmxStates.get(LightDMXState.DMX_STATE_OFF));
        }

    }

    public async setDmxState(state: LightDMXState) {
        switch (state) {
            case LightDMXState.DMX_STATE_OFF:
            case LightDMXState.DMX_STATE_RED:
            case LightDMXState.DMX_STATE_WHITE:
                await this.setStatic(state); break
            case LightDMXState.DMX_STATE_FLICKER:
                await this.setFlicker(true);
        }
    }

    public async setStatic(state: LightDMXState.DMX_STATE_OFF | LightDMXState.DMX_STATE_RED | LightDMXState.DMX_STATE_WHITE) {
        if (this.powerState == PowerState.POWER_STATE_POWERED && this.switchState == LightSwitchState.SWITCH_STATE_ON) {
            if (this.specialCue) {
                await Lightline.dmx.setCue(this.specialCue, 'STOP');
              }
            await Lightline.dmx.setCue(this.flickerCue, 'STOP');
            await Lightline.dmx.setCue(this.staticCue, 'STEP', this.dmxStates.get(state));
        } else {
            if (this.specialCue) {
                await Lightline.dmx.setCue(this.specialCue, 'STOP');
              }
            await Lightline.dmx.setCue(this.flickerCue, 'STOP');
            await Lightline.dmx.setCue(this.staticCue, 'STEP', this.dmxStates.get(LightDMXState.DMX_STATE_OFF));
        }

        this.dmxState = state;
    }

    public async setSpecial(special: boolean) {
        if (special && this.specialCue) {
            await Lightline.dmx.setCue(this.flickerCue, 'STOP');
            await Lightline.dmx.setCue(this.staticCue, 'STOP');
            await Lightline.dmx.setCue(this.specialCue, 'PLAY');
        } else {
            this.setStatic(this.dmxState);
        }
    }

    public async setFlicker(flicker: boolean) {
        if (this.powerState == PowerState.POWER_STATE_POWERED && this.switchState == LightSwitchState.SWITCH_STATE_ON) {
            if (flicker) {
                if (this.specialCue) {
                    await Lightline.dmx.setCue(this.specialCue, 'STOP');
                }
                await Lightline.dmx.setCue(this.staticCue, 'STOP');
                await Lightline.dmx.setCue(this.flickerCue, 'PLAY');
            } else {
                this.setStatic(this.dmxState);
            }
        }

        this.flicker = flicker;
    }
}