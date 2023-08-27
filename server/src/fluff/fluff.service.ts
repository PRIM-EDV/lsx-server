import * as fs from 'fs';

import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/gateway/app.gateway';
import { Request } from 'proto/lsx';
import { SoundService } from 'src/sound/sound.service';


@Injectable()
export class FluffService {

    private fluffState = true;
    private fluffFiles: string[] = [];

    constructor(private readonly gateway: AppGateway, private readonly sound: SoundService) {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));

        this.getFluffFiles().then((files) => {
            this.fluffFiles = files;
        })

        setInterval(this.fluffAnnouncementsInterval.bind(this), 1000);
    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if(event.request.getFluffFiles){
            this.gateway.respond(event.clientId, event.msgId, {getAnnouncementFiles: {files: this.fluffFiles}})
        }

        if(event.request.setFluffState){
            this.setFluffState(event.request.setFluffState.state)
            this.gateway.respond(event.clientId, event.msgId, {setBaseState: {}})
        }

        if(event.request.getFluffState){
            this.gateway.respond(event.clientId, event.msgId, {getFluffState: {state: this.fluffState}});
        }
    }

    public async getFluffFiles(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            fs.readdir('assets/wav/fluff', (err, files) => {
                if (err) {
                    resolve([]);
                } else {
                    resolve(files)
                }
            })
        })
    }

    public setFluffState(state: boolean) {
        const req: Request = {setFluffState: {state: state}};
        this.fluffState = state;
        this.gateway.requestAll(req).then();
    }

    private fluffAnnouncementsInterval() {
        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();


        if (this.fluffState) {
            if (seconds == 0 && (hours > 9 || hours < 3) ) {
                switch(minutes) {
                    case 15: this.sound.playWav(`assets/wav/fluff/${this.fluffFiles[Math.floor(Math.random() * this.fluffFiles.length)]}`); break;
                    case 35: this.sound.playWav(`assets/wav/fluff/${this.fluffFiles[Math.floor(Math.random() * this.fluffFiles.length)]}`); break;
                    case 55: this.sound.playWav(`assets/wav/fluff/${this.fluffFiles[Math.floor(Math.random() * this.fluffFiles.length)]}`); break;
                }
            }
        }
    }
}
