import { Module } from '@nestjs/common';
import { SoundModule } from 'src/sound/sound.module';
import { LockdownService } from './lockdown.service';

@Module({
  imports: [
    SoundModule
  ],
  providers: [LockdownService]
})
export class LockdownModule {}
