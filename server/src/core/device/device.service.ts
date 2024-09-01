import { Injectable } from "@nestjs/common";
import { PowerDevice, PowerState } from "proto/lsx.power";

@Injectable()
export class DeviceService {

    public powerState = new Map<PowerDevice, PowerState>([
        [PowerDevice.DEVICE_ADM_BASETOOL, PowerState.POWER_STATE_POWERED],
        [PowerDevice.DEVICE_CIC_MAPTOOL, PowerState.POWER_STATE_POWERED],
    ]);

    constructor() {

    }

    public getPowerState(id: PowerDevice): PowerState {
        return this.powerState.get(id);
    }

    public setPowerState(id: PowerDevice, state: PowerState) {
        this.powerState.set(id, state);
    }
}