import { Component, OnInit } from '@angular/core';
import { PowerPlantState, Request, Response } from 'proto/lsx';
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'app-power-plant',
  templateUrl: './power-plant.component.html',
  styleUrls: ['./power-plant.component.scss']
})
export class PowerPlantComponent implements OnInit {

  public powerPlantState: string | number = 'normal';

  constructor(private readonly backend: BackendService) { 

  }

  ngOnInit(): void {
    this.backend.onOpen.subscribe(async () => {
      const powerPlantState = await this.backend.getPowerPlantState();
      this.updateLocalPowerPlantState(powerPlantState);
    });
    this.backend.onRequest.subscribe(this.handleRequest.bind(this));
  }

  public async updateLocalPowerPlantState(powerPlantState: PowerPlantState){
    switch(powerPlantState) {
      case PowerPlantState.STATE_NORMAL: this.powerPlantState = 'normal'; break;
      case PowerPlantState.STATE_OFFLINE: this.powerPlantState = 'offline'; break;
      case PowerPlantState.STATE_CRITICAL: this.powerPlantState = 'critical'; break;
      case PowerPlantState.STATE_POWER_SAVING: this.powerPlantState = 'low'; break;
    }
    console.log(this.powerPlantState)
  }

  public async updateServerPowerGridState() {
    switch(this.powerPlantState) {
      case 'normal': await this.backend.setPowerPlantState(PowerPlantState.STATE_NORMAL); break;
      case 'critical': await this.backend.setPowerPlantState(PowerPlantState.STATE_CRITICAL); break;
      case 'low': await this.backend.setPowerPlantState(PowerPlantState.STATE_POWER_SAVING); break;
      case 'offline': await this.backend.setPowerPlantState(PowerPlantState.STATE_OFFLINE); break;
    }
  }

  private handleRequest(event: {id: string, request: Request}) {
    if(event.request.setPowerPlantState) {
      this.updateLocalPowerPlantState(event.request.setPowerPlantState.state!);
      this.backend.respond(event.id, {setPowerPlantState: {}})
    }
  }

}
