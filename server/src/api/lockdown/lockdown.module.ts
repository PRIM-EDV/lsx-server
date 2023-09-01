import { Module } from '@nestjs/common';
import { QlcModule } from 'src/dmx/qlc.module';
import { SoundModule } from 'src/sound/sound.module';
import { LockdownService } from './lockdown.service';
import { DroneModule } from 'src/api/drone/drone.module';

@Module({
  imports: [
    QlcModule,
    SoundModule,
    DroneModule
  ],
  exports: [
    LockdownService
  ],
  providers: [LockdownService]
})
export class LockdownModule {}
