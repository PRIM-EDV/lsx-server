import { Injectable } from '@angular/core';
import { Response, Request } from 'proto/lsx';
import { PowerGridState } from 'proto/lsx.power';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class PowerGridService {

  constructor(private readonly backend: BackendService) { }

  public async getPowerGridState(): Promise<PowerGridState> {
    const req: Request = {
      getPowerGridState: {}
    }

    const res: Response = await this.backend.request(req);
    return res.getPowerGridState!.state!;
  }

  public async setPowerGridState(state: PowerGridState) {
    const req: Request = {
      setPowerGridState: { state: state }
    }

    const res: Response = await this.backend.request(req);
  }

}
