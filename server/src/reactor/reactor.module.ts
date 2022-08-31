import { Module } from '@nestjs/common';
import { LockdownModule } from 'src/lockdown/lockdown.module';
import { SoundModule } from 'src/sound/sound.module';
import { ReactorController } from './reactor.controller';
import { ReactorService } from './reactor.service';

@Module({
  imports: [LockdownModule, SoundModule],
  controllers: [ReactorController],
  providers: [ReactorService],
})
export class ReactorModule {}