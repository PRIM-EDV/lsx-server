import { Module } from '@nestjs/common';
import { FluffService } from './fluff.service';
import { DroneModule } from 'src/api/drone/drone.module';
import { SoundModule } from 'src/platform/sound/sound.module';

@Module({
    imports: [
        SoundModule,
        DroneModule
    ],
    providers: [FluffService]
})
export class FluffModule {}
