import { Injectable } from '@angular/core';
import { Response, Request } from 'proto/lsx';
import { PowerLineId, PowerLineState } from 'proto/lsx.power';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class PowerControlService {

  constructor(private readonly backend: BackendService) { }

  public async getPowerGridState(id: PowerLineId): Promise<PowerLineState> {
    const req: Request = {
        getPowerLineState: {
            id: id
        }
    }

    const res: Response = await this.backend.request(req);
    return res.getPowerLineState!.state!;
  }

  public async setPowerLineState(id: PowerLineId, state: PowerLineState) {
    const req: Request = {
        setPowerLineState: {
            id: id, 
            state: state 
        }
    }

    const res: Response = await this.backend.request(req);
  }
}
