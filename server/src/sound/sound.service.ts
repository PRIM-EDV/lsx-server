import { Injectable } from '@nestjs/common';

@Injectable()
export class SoundService {

    public isPlaying = false;
    public isMuted = false;
    
    private player = require('play-sound')({});

    constructor() {
        this.playWav('assets/wav/triggered/blackout.wav');
    }


    public async playWav(file: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const p = this.player.play(file, console.log);
            console.log(p)
            p.on('exit', () => {
                console.log("???")
                resolve();
            })
        })
    }
}
