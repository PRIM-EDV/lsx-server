
import * as fs from 'fs';
import  * as Speaker from 'speaker-arm64';

import { Injectable } from '@nestjs/common';


@Injectable()
export class SoundService {

    public isPlaying = false;
    public isMuted = false;

    private speakerConfig = {
        channels: 2,          // 2 channels
        bitDepth: 16,         // 16-bit samples
        sampleRate: 44100     // 44,100 Hz sample rate
    }

    public async playWav(file: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.isPlaying && !this.isMuted) {
                const stream = fs.createReadStream(file);
                const speaker = new Speaker(this.speakerConfig);

                this.isPlaying = true;
                speaker.on('finish', () => {
                    this.isPlaying = false;
                    resolve(); 
                })
                stream.pipe(speaker)
            }
            else {
                // reject();
            }
        })
    }
}
