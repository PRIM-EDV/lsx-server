import * as fs from 'fs';

import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { SoundService } from 'src/platform/sound/sound.service';
import { Rpc } from 'src/common/decorators';
import { RpcHandler } from 'src/common/decorators/rpc-handler.decorator';

@Injectable()
@RpcHandler()
export class AnnouncementsService {

    constructor(private readonly sound: SoundService) {
        // this.gateway.onRequest.subscribe(this.handleRequest.bind(this));
        console.log(this);
    }

    // handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
    //         if(event.request.getAnnouncementFiles){
    //             this.getAnnoucementFiles().then((files) => {
    //               this.gateway.respond(event.clientId, event.msgId, {getAnnouncementFiles: {files: files}})
    //             })
    //         }
    
    //         if(event.request.playAnnouncement) {
    //             this.sound.playWav(event.request.playAnnouncement.filepath);
    //             this.gateway.respond(event.clientId, event.msgId, { playAnnouncement: {} })
    //         }
    // }

    @Rpc()
    public async getAnnoucementFiles(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            fs.readdir('assets/wav/triggered', (err, files) => {
                if (err) {
                    resolve([]);
                } else {
                    resolve(files)
                }
            })
        })
    }
}
