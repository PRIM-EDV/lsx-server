import { Module } from '@nestjs/common';
import { QlcModule } from 'src/dmx/qlc.module';
import { SoundModule } from 'src/sound/sound.module';
import { ReactorController } from './reactor.controller';
import { ReactorService } from './reactor.service';
import { LightModule } from 'src/light/light.module';
import { StateModule } from 'src/state/state.module';

@Module({
  imports: [
    SoundModule,
    LightModule,
    StateModule,
    QlcModule
  ],
  controllers: [ReactorController],
  providers: [ReactorService],
})
export class ReactorModule {}