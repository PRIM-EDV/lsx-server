import { Injectable } from '@nestjs/common';

@Injectable()
export class SoundService {

    public isPlaying = false;
    public isMuted = false;
    
    private player = require('play-sound')({});

    
    public async playWav(file: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if(!this.isPlaying && !this.isMuted) {
                const p = this.player.play(file, console.log);
                this.isPlaying = true;

                p.on('exit', () => {
                    this.isPlaying = false;
                    resolve();
                })
                p.on('error', () => {
                    this.isPlaying = false;
                    resolve();
                })
            } else {
                resolve();
            }
        })
    }
}
