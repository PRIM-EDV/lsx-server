import { Module } from '@nestjs/common';
import { LockdownService } from './lockdown.service';
import { DroneModule } from 'src/api/drone/drone.module';
import { QlcModule } from 'src/platform/qlc/qlc.module';
import { SoundModule } from 'src/platform/sound/sound.module';

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
