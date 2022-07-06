import { Controller, Get, Post, Delete } from '@nestjs/common';
import { LoggingService } from 'src/logging/logging.service';
// import { StateService } from 'src/state/state.service';

@Controller('reactor')
export class ReactorController {
    constructor(private readonly logger: LoggingService, private readonly stateService: StateService) {

    }

    @Get('alert_pressure')
    public async alertPressure():Promise<any> {
        if (this.stateService.state == 'normal' || this.stateService.state == 'powersave') {
            // Trigger Warning
        }
    }

    @Get('alert_heat')
    public async alertHeat(): Promise<any> {
        if (this.stateService.state == 'normal' || this.stateService.state == 'powersave') {
            // Trigger Warning
        }
    }

    @Get('power_low')
    public async powerLow(): Promise<any> {
        if (this..stateService.state == 'normal' || this.stateService.state == 'shutdown') {
            this.stateService.state = 'powersave';
            // Trigger Warning
        }
    }

    @Get('power_high')
    public async powerHigh(): Promise<any> {
        if (this.stateService.state == 'powersave' || this.stateService.state == 'shutdown') {
            this.stateService.state = 'normal';
        }
    }

    @Get('shutdown')
    public async shutdown(): Promise<any> {
        if (this.stateService.state == 'normal' || this.stateService.state == 'powersave') {
            this.stateService.state = 'shutdown';
        }
    }
    
}