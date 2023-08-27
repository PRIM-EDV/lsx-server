import { Module } from '@nestjs/common';
import { SoundModule } from 'src/sound/sound.module';
import { FluffService } from './fluff.service';

@Module({
    imports: [SoundModule],
    providers: [FluffService]
})
export class FluffModule {}
