import { Injectable } from "@angular/core";
import { BackendService } from "../backend/backend.service";
import { Light } from "./light-control.component";
import { LightDMXState, LightId, LightSwitchState } from "proto/lsx.light";
import { LockState } from "proto/lsx.common";
import { PowerState } from "proto/lsx.power";

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

     }
  }