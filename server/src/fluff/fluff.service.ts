import * as fs from 'fs';

import { Injectable } from '@nestjs/common';
import { AppGateway } from 'src/gateway/app.gateway';
import { Request } from 'proto/lsx';


@Injectable()
export class FluffService {
    constructor(private readonly gateway: AppGateway) {
        this.gateway.onRequest.subscribe(this.handleRequest.bind(this));
    }

    handleRequest(event: {clientId: string, msgId: string, request: Request}): void {
        if(event.request.getFluffFiles){
            this.getFluffFiles().then((files) => {
              this.gateway.respond(event.clientId, event.msgId, {getAnnouncementFiles: {files: files}})
            })
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
}
