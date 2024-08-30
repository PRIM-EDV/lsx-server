import { Injectable } from "@angular/core";
import { BackendService } from "../backend/backend.service";
import { Light } from "./light-control.component";
import { LightDMXState, LightId, LightSwitchState, SetLightDmxState_Request, SetLightLockState_Request, SetLightPowerState_Request, SetLightSwitchState_Request } from "proto/lsx.light";
import { LockState } from "proto/lsx.common";
import { PowerState } from "proto/lsx.power";
import { Request } from "proto/lsx";

@Injectable({
    providedIn: 'root'
})
export class LightControlService {

    public lights: Light[] = [
        { id: LightId.LIGHT_OG_BASE_ADM, label: 'Section ADM', dmxState: LightDMXState.DMX_STATE_OFF, switchState: LightSwitchState.SWITCH_STATE_OFF, powerState: PowerState.POWER_STATE_POWERED, lockState: LockState.LOCK_STATE_UNLOCKED },
        { id: LightId.LIGHT_OG_BASE_CIC, label: 'Section CIC', dmxState: LightDMXState.DMX_STATE_OFF, switchState: LightSwitchState.SWITCH_STATE_OFF, powerState: PowerState.POWER_STATE_POWERED, lockState: LockState.LOCK_STATE_UNLOCKED },
        { id: LightId.LIGHT_OG_BASE_HC, label: 'Section HC', dmxState: LightDMXState.DMX_STATE_OFF, switchState: LightSwitchState.SWITCH_STATE_OFF, powerState: PowerState.POWER_STATE_POWERED, lockState: LockState.LOCK_STATE_UNLOCKED },
        { id: LightId.LIGHT_OG_BASE_MED, label: 'Section MED', dmxState: LightDMXState.DMX_STATE_OFF, switchState: LightSwitchState.SWITCH_STATE_OFF, powerState: PowerState.POWER_STATE_POWERED, lockState: LockState.LOCK_STATE_UNLOCKED },
        { id: LightId.LIGHT_OG_BASE_SCI, label: 'Section SCI', dmxState: LightDMXState.DMX_STATE_OFF, switchState: LightSwitchState.SWITCH_STATE_OFF, powerState: PowerState.POWER_STATE_POWERED, lockState: LockState.LOCK_STATE_UNLOCKED },
        { id: LightId.LIGHT_OG_BASE_TEC, label: 'Section TEC', dmxState: LightDMXState.DMX_STATE_OFF, switchState: LightSwitchState.SWITCH_STATE_OFF, powerState: PowerState.POWER_STATE_POWERED, lockState: LockState.LOCK_STATE_UNLOCKED },
    ];

    constructor(private readonly backend: BackendService) {
        this.backend.onOpen.subscribe(async () => {
            // const modeSilentState = await this.droneControlService.getModeSilentState();
            // this.updateLocalModeSilentState(modeSilentState);
        });
        this.backend.onRequest.subscribe(this.handleRequest.bind(this));
    }

    private setLightSwitchState(request: SetLightSwitchState_Request) {
        const light = this.lights.find(l => l.id === request.id);
        if (light) {
            light.switchState = request.state;
        }
    }

    private setLightLockState(request: SetLightLockState_Request) {
        const light = this.lights.find(l => l.id === request.id);
        if (light) {
            light.lockState = request.state;
        }
    }

    private setLightPowerState(request: SetLightPowerState_Request) {
        const light = this.lights.find(l => l.id === request.id);
        if (light) {
            light.powerState = request.state;
        }
    }

    private setLightDMXState(request: SetLightDmxState_Request) {
        const light = this.lights.find(l => l.id === request.id);
        if (light) {
            light.dmxState = request.state;
        }
    }

    private handleRequest(event: { id: string, request: Request }) {
        const req = event.request;
        if (req.setLightSwitchState) {
            this.setLightSwitchState(req.setLightSwitchState);
            this.backend.respond(event.id, {});
        }

        if (req.setLightLockState) {
            this.setLightLockState(req.setLightLockState);
            this.backend.respond(event.id, {});
        }

        if (req.setLightPowerState) {
            this.setLightPowerState(req.setLightPowerState);
            this.backend.respond(event.id, {});
        }   

        if (req.setLightDmxState) {
            this.setLightDMXState(req.setLightDmxState);
            this.backend.respond(event.id, {});
        }   
    }

}