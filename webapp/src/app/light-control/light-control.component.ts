import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PhElementsModule } from 'lib/phobos-elements/ph-elements.module';
import { LockState } from 'proto/lsx.common';
import { LightDMXState, LightId, LightSwitchState } from 'proto/lsx.light';
import { PowerState } from 'proto/lsx.power';
import { BackendService } from '../backend/backend.service';
import { LightControlService } from './light-control.service';

export interface Light { 
    id: LightId;
    label: string;
    dmxState: LightDMXState;
    switchState: LightSwitchState;
    powerState: PowerState;
    lockState: LockState
}

@Component({
  selector: 'lsx-light-control',
  standalone: true,
  imports: [
    CommonModule,
    PhElementsModule
  ],
  templateUrl: './light-control.component.html',
  styleUrl: './light-control.component.scss'
})
export class LightControlComponent {

  public testState: string = 'off';


  public lightSwitchState = LightSwitchState;
  public lightLockState = LockState;

  constructor(
    private readonly backend: BackendService,
    public readonly service: LightControlService) {
   
   }
    
   public blub() {
    console.log('blub');
   }
}
