import { platform } from 'node:os';
import { spawn } from 'node:child_process';
import { Track } from '../common/track';

export class AplayTrack implements Track {
    private wav: string;
    private process: any;   
    private isPlaying = false;

    constructor() {
        if (platform() !== 'linux') {
            throw new Error('AplayTrack is only supported on Linux');
        }
    }

    async play(wav: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if(!this.isPlaying) { 
                this.wav = wav;
                this.process = spawn('aplay', [ wav ]);
                this.isPlaying = true;

                this.process.on('exit', () => {
                    this.isPlaying = false;
                    this.wav = '';
                    resolve();
                })

                this.process.on('error', error => {
                    this.isPlaying = false;
                    reject(error);
                })
            } else {
                reject(new Error(`Already playing: ${this.wav}`));
            }
        });
    }
    async pause(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async stop(): Promise<void> {
        this.isPlaying = true;
        this.process.kill('SIGTERM');
        this.isPlaying = false;
        this.wav = '';
    }
}