import * as fs from 'fs';

import { Injectable } from '@nestjs/common';
import { ModeSilentState } from 'proto/lsx.drone';
import { StateService } from 'src/core/state/state.service';
import { SoundService } from 'src/platform/sound/sound.service';


@Injectable()
export class FluffService {

    public fluffState = true;

    constructor(private readonly sound: SoundService, private readonly state: StateService) {
        setInterval(this.fluffAnnouncementsInterval.bind(this), 1000);
    }

    public async getFluffFiles(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            fs.readdir('assets/wav/fluff', (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    resolve( files )
                }
            })
        })
    }

    private async fluffAnnouncementsInterval() {
        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();
        const fluffFiles = await this.getFluffFiles();

        if (this.fluffState && this.state.modeSilentState == ModeSilentState.MODE_SILENT_STATE_NORMAL) {
            if (seconds == 0 && (hours > 9 || hours < 3)) {
                switch (minutes) {
                    case 15: this.sound.playWav(`assets/wav/fluff/${fluffFiles[Math.floor(Math.random() * fluffFiles.length)]}`); break;
                    case 35: this.sound.playWav(`assets/wav/fluff/${fluffFiles[Math.floor(Math.random() * fluffFiles.length)]}`); break;
                    case 55: this.sound.playWav(`assets/wav/fluff/${fluffFiles[Math.floor(Math.random() * fluffFiles.length)]}`); break;
                }
            }
        }
    }
}
