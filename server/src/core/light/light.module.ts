import { Global, Module } from '@nestjs/common';
import { LightService } from './light.service';

@Global()
@Module({
    exports: [
        LightService
    ],
    providers: [
        LightService
    ]
})
export class LightModule {}
