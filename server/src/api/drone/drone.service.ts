import { Injectable } from "@nestjs/common";
import { BombAreaId, BombAreaState, ModeSilentState } from "proto/lsx.drone";
import { LightId } from "proto/lsx.light";
import { PowerState } from "proto/lsx.power";
import { LightService } from "src/core/light/light.service";
import { StateService } from "src/core/state/state.service";
import { SoundService } from "src/platform/sound/sound.service";

@Injectable()
export class DroneService {

    private bombFiles = [
        'assets/wav/drone/Drone_explosion_01.wav',
        'assets/wav/drone/Drone_explosion_02.wav',
        'assets/wav/drone/Drone_explosion_03.wav'
    ]

    constructor(
        private readonly sound: SoundService, 
        private readonly light: LightService, 
        private readonly state: StateService
    ) {
    }
    
    public getLightLineByBombAreaId(id: BombAreaId): LightId {
        switch(id) {
            case BombAreaId.AREA_CIC:
                return LightId.LIGHT_OG_BASE_CIC;
            case BombAreaId.AREA_HALL:
                return LightId.LIGHT_OG_HALL;
            case BombAreaId.AREA_MED:
                return LightId.LIGHT_OG_BASE_MED;
            case BombAreaId.AREA_SCI:
                return LightId.LIGHT_OG_BASE_SCI;
            case BombAreaId.AREA_TEC:
                return LightId.LIGHT_OG_BASE_TEC;
            // case BombAreaId.AREA_TUNNEL:
            //     return LightId.LIGHT_OG_TUNNEL;
        }
    }

    public async handleBombArea(id: BombAreaId) {
        const lightLineId = this.getLightLineByBombAreaId(id);
        // const lightLine = this.light.lightlines.get(lightLineId);

        this.state.bombAreaStates.set(id, BombAreaState.STATE_FUSED);

        this.sound.playWav(this.bombFiles[Math.floor(Math.random() * this.bombFiles.length)]).then();

        // setTimeout(async () => { await lightLine.setSpecial(true)}, 2650);
    }

    public async handleBombBase() {
        for (const lightline of this.light.getLightLines()) {
            setTimeout(async () => { await lightline.setPowerState(PowerState.POWER_STATE_CRITICAL); console.log("start")}, 2650);
            setTimeout(async () => { await lightline.setPowerState(PowerState.POWER_STATE_POWERED); console.log("stop")}, 3850);
        }
    }

    public handleModeSilentStateChange(state: ModeSilentState) {
        switch(state) {
            case ModeSilentState.MODE_SILENT_STATE_NORMAL:
                if (this.state.modeSilentState == ModeSilentState.MODE_SILENT_STATE_SILENT_DRONE) {
                    this.sound.playWav('assets/wav/drone/DROHNE-basismodus-silent-beendet.wav').then( () => {
                        // this.light.setLightLines(LightLineMode.MODE_WHITE).then().catch((err) => console.log(err));
                    }
                    ).catch((err) =>{console.log(err)});
                } else {
                    // this.light.setLightLines(LightLineMode.MODE_WHITE).then().catch((err) => console.log(err));
                }
                break;
            case ModeSilentState.MODE_SILENT_STATE_SILENT_DRONE:
                this.sound.playWav('assets/wav/drone/DROHNE-alarm.wav').then( () => {
                    // this.light.setLightLines(LightLineMode.MODE_RED).then().catch((err) => console.log(err));
                }
                ).catch((err) =>{console.log(err)}); break;
            case ModeSilentState.MODE_SILENT_STATE_SILENT:
                // this.light.setLightLines(LightLineMode.MODE_RED).then().catch((err) => console.log(err));
                break;
        }
    }
}