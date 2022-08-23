import * as fs from 'fs';

import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

@Injectable()
export class AnnouncementsService {

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
