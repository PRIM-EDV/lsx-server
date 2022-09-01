
import * as fs from 'fs';
import  * as Speaker from 'speaker-arm64';

import { Injectable } from '@nestjs/common';


// import * as player from 'play-sound'

@Injectable()
export class SoundService {

    public isPlaying = false;
    public isMuted = false;
    
    private player = require('play-sound')({});


    // constructor() {
    
    // }

    private speakerConfig = {
        device: "hw1,0",
        channels: 2,          // 2 channels
        bitDepth: 16,         // 16-bit samples
        sampleRate: 44100     // 44,100 Hz sample rate
    }



    public async playWav(file: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.player.play(file);
            resolve();
            // if (!this.isPlaying && !this.isMuted) {
            //     const stream = fs.createReadStream(file);
            //     const speaker = new Speaker(this.speakerConfig);

            //     this.isPlaying = true;
            //     speaker.on('finish', () => {
            //         this.isPlaying = false;
            //         resolve(); 
            //     })
            //     speaker.on('error', (err) => {
            //         console.log(err);
            //     })
            //     stream.pipe(speaker)
            // }
            // else {
            //     // reject();
            // }
            this
        })
    }
}
