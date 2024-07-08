import { LightDMXState, LightId, LightMode, LightSwitchState } from "proto/lsx.light";
import { PowerState } from "proto/lsx.power";
import { QlcService } from "src/platform/qlc/qlc.service";

export type LightDMXStates = Map<LightDMXState, number>;

export class Lightline {
    public static dmx: QlcService;
    public id: LightId;
    public staticCue: number;
    public flickerCue: number;
    public specialCue?: number;

    public mode: LightMode = LightMode.LIGHT_MODE_WHITE;
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

    public async setPowerState(power: PowerState) {
        this.powerState = power;
        await this.update();
    }

    public async setDmxState(state: LightDMXState) {
        if (state != LightDMXState.DMX_STATE_FLICKER && !this.dmxStates.has(state)) {
            return;
        }

        if (this.specialCue) {
            await Lightline.dmx.setCue(this.specialCue, 'STOP');
        }

        switch (state) {
            case LightDMXState.DMX_STATE_OFF:
            case LightDMXState.DMX_STATE_RED:
            case LightDMXState.DMX_STATE_WHITE:
                await Lightline.dmx.setCue(this.flickerCue, 'STOP');
                await Lightline.dmx.setCue(this.staticCue, 'STEP', this.dmxStates.get(state)); break;
            case LightDMXState.DMX_STATE_FLICKER:
                await Lightline.dmx.setCue(this.staticCue, 'STOP');
                await Lightline.dmx.setCue(this.flickerCue, 'PLAY'); break;
        }
    }

    public async setSwitchState(state: LightSwitchState) { 
        this.switchState = state;
        await this.update();
    }

    private async update() {
        if (this.switchState === LightSwitchState.SWITCH_STATE_ON) {
            if (this.powerState == PowerState.POWER_STATE_POWERED) {
                switch (this.mode) { 
                    case LightMode.LIGHT_MODE_WHITE:
                        await this.setDmxState(LightDMXState.DMX_STATE_WHITE); break;
                    case LightMode.LIGHT_MODE_RED:
                        await this.setDmxState(LightDMXState.DMX_STATE_RED); break;
                }
            } else if (this.powerState == PowerState.POWER_STATE_CRITICAL) { 
                await this.setDmxState(LightDMXState.DMX_STATE_FLICKER);
            }
        } else {
            if (this.specialCue) {
                await Lightline.dmx.setCue(this.specialCue, 'STOP');
              }
          await Lightline.dmx.setCue(this.flickerCue, 'STOP');
          await Lightline.dmx.setCue(this.staticCue, 'STEP', this.dmxStates.get(LightDMXState.DMX_STATE_OFF));
        }
    }

    public async setSpecial(special: boolean) {
        // if (special && this.specialCue) {
        //     await Lightline.dmx.setCue(this.flickerCue, 'STOP');
        //     await Lightline.dmx.setCue(this.staticCue, 'STOP');
        //     await Lightline.dmx.setCue(this.specialCue, 'PLAY');
        // } else {
        //     this.setDmxState(this.dmxState);
        // }
    }
}