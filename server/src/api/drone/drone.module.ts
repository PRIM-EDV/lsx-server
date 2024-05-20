import { Module } from '@nestjs/common';
import { DroneService } from './drone.service';
import { QlcModule } from 'src/platform/qlc/qlc.module';
import { SoundModule } from 'src/platform/sound/sound.module';

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
