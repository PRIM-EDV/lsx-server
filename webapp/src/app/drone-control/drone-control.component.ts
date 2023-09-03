import { Component, OnInit } from '@angular/core';
import { Request, Response } from 'proto/lsx';
import { BackendService } from '../backend/backend.service';
import { DroneCotrolService } from './drone-control.service';
import { ModeSilentState } from 'proto/lsx.drone';

@Component({
  selector: 'drone-control',
  templateUrl: './drone-control.component.html',
  styleUrls: ['./drone-control.component.scss']
})
export class DroneControlComponent implements OnInit {

  public modeSilentState: string | number = 'normal';
  public droneSounds = [
    {label: "Sonar I", file: "Botsonar_01.wav"},
    {label: "Sonar II", file: "Botsonar_02.wav"},
    {label: "Sonar III", file: "Botsonar_03.wav"},
  ]

  constructor(private readonly backend: BackendService, private readonly droneControlService: DroneCotrolService) {
    this.backend.onOpen.subscribe(async () => {
      const modeSilentState = await this.droneControlService.getModeSilentState();
      this.updateLocalModeSilentState(modeSilentState);
    });
    this.backend.onRequest.subscribe(this.handleRequest.bind(this));
   }

  ngOnInit(): void {
    if (this.backend.isConnected) {
      this.droneControlService.getModeSilentState().then((state) => {this.updateLocalModeSilentState(state)});
    }
  }

  public async updateLocalModeSilentState(state: ModeSilentState){
    switch(state) {
      case ModeSilentState.MODE_SILENT_STATE_NORMAL: this.modeSilentState = 'normal'; break;
      case ModeSilentState.MODE_SILENT_STATE_SILENT: this.modeSilentState = 'silent'; break;
    }
  }

  public async updateRemoteModeSilentSate() {
    switch(this.modeSilentState) {
      case 'normal': await this.droneControlService.setModeSilentState(ModeSilentState.MODE_SILENT_STATE_NORMAL); break;
      case 'silent': await this.droneControlService.setModeSilentState(ModeSilentState.MODE_SILENT_STATE_SILENT); break;
    }
  }

  public playSound(file: string) {
    const req: Request = {
        playAnnouncement: {filepath: `assets/wav/drone/${file}`}
    }

    this.backend.request(req);
}

  private handleRequest(event: {id: string, request: Request}) {
    if(event.request.setModeSilentState) {
      this.updateLocalModeSilentState(event.request.setModeSilentState.state!);
      this.backend.respond(event.id, {setModeSilentState: {}})
    }
  }


}
