import * as fs from 'fs';

import { Injectable } from '@nestjs/common';
import { SoundService } from 'src/platform/sound/sound.service';
import { Rpc } from 'src/common/decorators';
import { RpcHandler } from 'src/common/decorators/rpc-handler.decorator';
import { GetAnnouncementFiles_Request, GetAnnouncementFiles_Response, PlayAnnouncement_Request, PlayAnnouncement_Response } from 'proto/lsx';

@Injectable()
@RpcHandler()
export class AnnouncementsService {

    constructor(private readonly sound: SoundService) {

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
    public async getAnnouncementFiles(req: GetAnnouncementFiles_Request): Promise<GetAnnouncementFiles_Response> {
        return new Promise<GetAnnouncementFiles_Response>((resolve, reject) => {
            fs.readdir('assets/wav/triggered', (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ files: files });
                }
            })
        })
    }

    @Rpc()
    public async playAnnouncement(req: PlayAnnouncement_Request): Promise<PlayAnnouncement_Response> {
        this.sound.playWav(req.filepath);
        return {};
    }
}
