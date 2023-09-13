import { Module } from '@nestjs/common';
import { QlcModule } from 'src/dmx/qlc.module';
import { SoundModule } from 'src/sound/sound.module';
import { DroneService } from './drone.service';

@Module({
  imports: [
    QlcModule,
    SoundModule
  ],
  exports: [
    DroneService
  ],
  providers: [DroneService]
})
export class DroneModule {}
