import * as fs from 'fs';

import { Injectable, UseGuards } from '@nestjs/common';
import { SoundService } from 'src/platform/sound/sound.service';
import { Rpc } from 'src/core/rpc/decorators';
import { RpcHandler } from 'src/core/rpc/decorators/rpc-handler.decorator';
import { GetAnnouncementFiles_Response, PlayAnnouncement_Request, PlayAnnouncement_Response } from 'proto/lsx';
import { AppGateway } from 'src/app.gateway';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guards';
import { Ws } from 'src/common/interfaces/ws';

@Injectable()
export class AnnouncementsService {

    constructor(private readonly sound: SoundService) {}

    public async getAnnouncementFiles(): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            fs.readdir('assets/wav/triggered', (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(files);
                }
            })
        })
    }

    public async playAnnouncement(filepath: string): Promise<void> {
        this.sound.playWav(filepath);
    }
}
