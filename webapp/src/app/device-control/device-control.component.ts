import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhElementsModule } from 'lib/phobos-elements/ph-elements.module';
import { Request } from 'proto/lsx';
import { PowerDevice, PowerState } from 'proto/lsx.power';
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'lsx-device-control',
  standalone: true,
  imports: [
    CommonModule,
    PhElementsModule
  ],
  templateUrl: './device-control.component.html',
  styleUrl: './device-control.component.scss'
})
export class DeviceControlComponent {
  public powerState = PowerState;

  public maptoolPowerState = PowerState.POWER_STATE_POWERED;
  public basetoolPowerState = PowerState.POWER_STATE_POWERED;


  constructor(private backend: BackendService) {
    
  }

  public async onMaptoolPowerStateChange(state: PowerState) {
    const req: Request = {
      setDevicePowerState: {
        device: PowerDevice.DEVICE_CIC_MAPTOOL,
        state: state
      }
    }
    
    await this.backend.request(req);
  }

  public async onBasetoolPowerStateChange(state: PowerState) {
    const req: Request = {
      setDevicePowerState: {
        device: PowerDevice.DEVICE_ADM_BASETOOL,
        state: state
      }
    }
    
    await this.backend.request(req);
  }


}
