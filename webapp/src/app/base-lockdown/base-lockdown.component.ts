import { Component, OnInit } from '@angular/core';
import { BaseState } from 'proto/lsx.lockdown';
import { BackendService } from '../backend/backend.service';
import { Request } from 'proto/lsx';

@Component({
  selector: 'base-lockdown',
  templateUrl: './base-lockdown.component.html',
  styleUrls: ['./base-lockdown.component.scss']
})
export class BaseLockdownComponent implements OnInit {

  public baseState: string = "normal";
  public autoLockdown: string = "on";
  public lockdownAnnouncements: string = "on";

  constructor(private readonly backend: BackendService) { }

  ngOnInit(): void {
    this.backend.onOpen.subscribe(async () => {
      // const powerPlantState = await this.backend.getPowerPlantState();
      // this.updateLocalPowerPlantState(powerPlantState);
    });
    this.backend.onRequest.subscribe(this.handleRequest.bind(this));
  }

  public async updateLocalBaseState(baseState: BaseState) {
    switch(baseState) {
      case BaseState.BASE_STATE_LOCKDOWN: this.baseState = 'lockdown'; break;
      case BaseState.BASE_STATE_NORMAL: this.baseState = 'normal'; break;
    }
  }

  public async updateLocalAutoLockdown(state: boolean) {
    (state) ? this.autoLockdown = 'on' : this.autoLockdown = 'off';
  }

  public async updateLocalLockdownAnnouncements(state: boolean) {
    (state) ? this.lockdownAnnouncements = 'on' : this.lockdownAnnouncements = 'off';
  }

  public async updateServerBaseState() {
    switch(this.baseState) {
      case 'normal': await this.backend.setPowerPlantState(PowerPlantState.STATE_NORMAL); break;
      case 'lockdown': await this.backend.setPowerPlantState(PowerPlantState.STATE_CRITICAL); break;
    }
  }

  private handleRequest(event: {id: string, request: Request}) {
    if(event.request.setBaseState) {
      this.updateLocalBaseState(event.request.setBaseState.state!);
      this.backend.respond(event.id, {setBaseState: {}})
    }
    if(event.request.setAutoLockdown) {
      this.updateLocalAutoLockdown(event.request.setAutoLockdown.state!);
      this.backend.respond(event.id, {setAutoLockdown: {}})
    }
    if(event.request.setLockdownAnnouncements) {
      this.updateLocalAutoLockdown(event.request.setLockdownAnnouncements.state!);
      this.backend.respond(event.id, {setLockdownAnnouncements: {}})
    }
  }


}
