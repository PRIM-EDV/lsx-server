import { Module } from '@nestjs/common';
import { LightModule } from 'src/core/light/light.module';
import { StateModule } from 'src/core/state/state.module';
import { QlcModule } from 'src/platform/qlc/qlc.module';
import { SoundModule } from 'src/platform/sound/sound.module';
import { PowerController } from './power.controller';
import { PowerService } from './power.service';

@Module({
  imports: [
    SoundModule,
    LightModule,
    StateModule,
    QlcModule
  ],
  providers: [PowerController, PowerService],
})
export class PowerModule {}