import { Injectable } from "@nestjs/common";
import { Track } from "./common/track";
import { platform } from "os";

import { AplayTrack } from "./linux/aplay.track";

@Injectable()
export class AudioService {
    constructor() {

    }

    public async createTrack(): Promise<Track> {
        if (platform() === 'linux') {
            return new AplayTrack();
        } else {
            throw new Error('Unsupported platform');
        }
    }
}