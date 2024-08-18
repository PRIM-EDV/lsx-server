import { Global, Module } from "@nestjs/common";
import { AudioService } from "src/platform/audio/audio.service";
import { SoundService } from "./sound.service";

@Global()
@Module({
    providers: [
        AudioService,
        SoundService
    ],
    exports: [
        SoundService
    ]
})
export class SoundModule {}