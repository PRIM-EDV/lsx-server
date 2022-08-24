import { Controller, Get, Post, Delete } from '@nestjs/common';
import { PowerPlantState } from 'proto/lsx.power';
import { LoggingService } from 'src/logging/logging.service';
import { ReactorService } from './reactor.service';

// import { StateService } from 'src/state/state.service';

@Controller('reactor')
export class ReactorController {
  constructor(
    private readonly logger: LoggingService,
    private readonly reactorService: ReactorService
  )
  {}

  @Get('alert_pressure')
  public async alertPressure():Promise<any> {
      // if (this.stateService.state == 'normal' || this.stateService.state == 'powersave') {
      //     // Trigger Warning
      // }
  }

  @Get('alert_heat')
  public async alertHeat(): Promise<any> {
      // if (this.stateService.state == 'normal' || this.stateService.state == 'powersave') {
      //     // Trigger Warning
      // }
  }

  @Get('power_low')
  public async powerLow(): Promise<any> {
    this.reactorService.setPowerPlantState(PowerPlantState.STATE_CRITICAL);
      // if (this.stateService.state == 'normal' || this.stateService.state == 'shutdown') {
      //     this.stateService.state = 'powersave';
      //     // Trigger Warning
      // }
  }

  @Get('power_high')
  public async powerHigh(): Promise<any> {
    this.reactorService.setPowerPlantState(PowerPlantState.STATE_NORMAL);
      // if (this.stateService.state == 'powersave' || this.stateService.state == 'shutdown') {
      //     this.stateService.state = 'normal';
      // }
  }

  @Get('shutdown')
  public async shutdown(): Promise<any> {
    this.reactorService.setPowerPlantState(PowerPlantState.STATE_OFFLINE);
      // if (this.stateService.state == 'normal' || this.stateService.state == 'powersave') {
      //     this.stateService.state = 'shutdown';
      // }
  }
}
