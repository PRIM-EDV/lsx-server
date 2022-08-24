import { Injectable } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { Request, Response } from 'proto/lsx';

@Injectable({
  providedIn: 'root'
})
export class SpeakerFluffService {

  constructor(private readonly backend: BackendService) { }

  public async getFluffFiles(): Promise<string[]> {
    const req: Request = {
        getFluffFiles: {}
    }

    const res: Response = await this.backend.request(req);
    return res.getAnnouncementFiles!.files!;
}
}
