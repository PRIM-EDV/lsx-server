import { Injectable } from '@nestjs/common';

import playSound =  require("play-sound");

@Injectable()
export class SoundService {

    public isPlaying = false;
    public isMuted = false;
    
    private player = playSound({});

    constructor() {
        console.log(this.player.players)
    }
    
    public async playWav(file: string): Promise<void> {
        console.log(this.player)
        return new Promise((resolve, reject) => {
            if(!this.isPlaying && !this.isMuted) {
                const p = this.player.play(file);
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
