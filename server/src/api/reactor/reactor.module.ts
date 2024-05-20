import { Module } from '@nestjs/common';
import { ReactorController } from './reactor.controller';
import { ReactorService } from './reactor.service';
import { LightModule } from 'src/core/light/light.module';
import { StateModule } from 'src/core/state/state.module';
import { QlcModule } from 'src/platform/qlc/qlc.module';
import { SoundModule } from 'src/platform/sound/sound.module';

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