import { Module } from '@nestjs/common';
import { SoundModule } from 'src/sound/sound.module';
import { FluffService } from './fluff.service';
import { DroneModule } from 'src/api/drone/drone.module';

@Module({
    imports: [
        SoundModule,
        DroneModule
    ],
    providers: [FluffService]
})
export class FluffModule {}
