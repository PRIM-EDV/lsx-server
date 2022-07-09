import { Component, OnInit } from '@angular/core';
import { PowerGridState, PowerLineState, Request, Response } from 'proto/lsx';
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'app-power-control',
  templateUrl: './power-control.component.html',
  styleUrls: ['./power-control.component.scss']
})
export class PowerControlComponent implements OnInit {

  public poweredStateBaseMedicine: boolean = false;
  public poweredStateUpperLeft: boolean = false;
  public poweredStateUpperRight: boolean = false;
  public poweredStateLowerRight: boolean = false;
  public poweredStateLowerLeft: boolean = false;


  constructor(private readonly backend: BackendService) { }

  ngOnInit(): void {
    this.backend.onOpen.subscribe(async () => {
      const powerGridState = await this.backend.getPowerGridState();
      this.updateLocalPowerGridState(powerGridState);
    })

    this.backend.onRequest.subscribe(this.handleRequest.bind(this));
  }

  public async updateLocalPowerGridState(powerGridState: PowerGridState){
    this.poweredStateBaseMedicine = powerGridState.ogBaseMed == PowerLineState.STATE_POWERED;
    this.poweredStateUpperLeft = powerGridState.ogParcelLeft == PowerLineState.STATE_POWERED;
    this.poweredStateUpperRight = powerGridState.ogParcelRight == PowerLineState.STATE_POWERED;
    this.poweredStateLowerLeft = powerGridState.ugParcelLeft == PowerLineState.STATE_POWERED;
    this.poweredStateLowerRight = powerGridState.ugParcelRight == PowerLineState.STATE_POWERED;
  }

  public async updateServerPowerGridState() {
    const powerGridState: PowerGridState = {
      ogBaseMed: this.poweredStateBaseMedicine ? PowerLineState.STATE_POWERED : PowerLineState.STATE_UNPOWERED,
      ogParcelLeft: this.poweredStateUpperLeft ? PowerLineState.STATE_POWERED : PowerLineState.STATE_UNPOWERED,
      ogParcelRight: this.poweredStateUpperRight ? PowerLineState.STATE_POWERED : PowerLineState.STATE_UNPOWERED,
      ugParcelLeft: this.poweredStateLowerLeft ? PowerLineState.STATE_POWERED : PowerLineState.STATE_UNPOWERED,
      ugParcelRight: this.poweredStateLowerRight ? PowerLineState.STATE_POWERED : PowerLineState.STATE_UNPOWERED,
    }

    await this.backend.setPowerGridState(powerGridState);
  }

  private handleRequest(event: {id: string, request: Request}) {
    if(event.request.setPowerGridState) {
      this.updateLocalPowerGridState(event.request.setPowerGridState.state!);
      this.backend.respond(event.id, {setPowerGridState: {}})
    }
  }

}
