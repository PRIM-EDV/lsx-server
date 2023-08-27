import { Module } from '@nestjs/common';
import { QlcModule } from 'src/dmx/qlc.module';
import { SoundModule } from 'src/sound/sound.module';
import { LockdownService } from './lockdown.service';

@Module({
  imports: [
    QlcModule,
    SoundModule
  ],
  exports: [
    LockdownService
  ],
  providers: [LockdownService]
})
export class LockdownModule {}
