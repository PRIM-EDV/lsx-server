import { Module } from '@nestjs/common';
import { SoundService } from './sound.service';

@Module({
  exports: [
    SoundService
  ],
  providers: [SoundService]
})
export class SoundModule {}
