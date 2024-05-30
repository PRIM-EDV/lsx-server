import { Module } from '@nestjs/common';
import { LockdownService } from './lockdown.service';
import { DroneModule } from 'src/api/drone/drone.module';
import { QlcModule } from 'src/platform/qlc/qlc.module';
import { SoundModule } from 'src/platform/sound/sound.module';
import { LockdownController } from './lockdown.controller';

@Module({
  imports: [
    QlcModule,
    SoundModule,
    DroneModule
  ],
  exports: [
    LockdownService
  ],
  providers: [
    LockdownController,
    LockdownService]
})
export class LockdownModule {}
