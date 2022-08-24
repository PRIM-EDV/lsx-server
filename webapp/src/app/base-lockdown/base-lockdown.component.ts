import { Component, OnInit } from '@angular/core';
import { BaseState } from 'proto/lsx.lockdown';
import { BackendService } from '../backend/backend.service';
import { Request } from 'proto/lsx';
import { BaseLockdownService } from './base-lockdown.service';

@Component({
  selector: 'base-lockdown',
  templateUrl: './base-lockdown.component.html',
  styleUrls: ['./base-lockdown.component.scss']
})
export class BaseLockdownComponent implements OnInit {

  public baseState: string | number = "normal";
  public autoLockdown: string | number = "on";
  public lockdownAnnouncements: string | number = "on";

  constructor(private readonly backend: BackendService, private readonly baseLockdownService: BaseLockdownService) { }

  ngOnInit(): void {
    this.backend.onOpen.subscribe(async () => {
      const baseState = await this.baseLockdownService.getBaseState();
      const autoLockdown = await this.baseLockdownService.getAutoLockdown();
      const lockdownAnnouncements = await this.baseLockdownService.getLockdownAnnouncements();

      this.updateLocalBaseState(baseState);
      this.updateLocalAutoLockdown(autoLockdown);
      this.updateLocalLockdownAnnouncements(lockdownAnnouncements);
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
      case 'normal': await this.baseLockdownService.setBaseState(BaseState.BASE_STATE_NORMAL); break;
      case 'lockdown': await this.baseLockdownService.setBaseState(BaseState.BASE_STATE_LOCKDOWN); break;
    }
  }

  public async updateAutoLockdown() {
    switch(this.autoLockdown) {
      case 'on': await this.baseLockdownService.setAutoLockdown(true); break;
      case 'off': await this.baseLockdownService.setAutoLockdown(false); break;
    }
  }

  public async updateLockdownAnnouncements() {
    switch(this.lockdownAnnouncements) {
      case 'on': await this.baseLockdownService.setLockdownAnnouncements(true); break;
      case 'off': await this.baseLockdownService.setLockdownAnnouncements(false); break;
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
      this.updateLocalLockdownAnnouncements(event.request.setLockdownAnnouncements.state!);
      this.backend.respond(event.id, {setLockdownAnnouncements: {}})
    }
  }


}
