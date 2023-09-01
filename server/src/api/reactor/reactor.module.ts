import { Module } from '@nestjs/common';
import { QlcModule } from 'src/dmx/qlc.module';
import { LockdownModule } from 'src/api/lockdown/lockdown.module';
import { SoundModule } from 'src/sound/sound.module';
import { ReactorController } from './reactor.controller';
import { ReactorService } from './reactor.service';

@Module({
  imports: [LockdownModule, SoundModule, QlcModule],
  controllers: [ReactorController],
  providers: [ReactorService],
})
export class ReactorModule {}