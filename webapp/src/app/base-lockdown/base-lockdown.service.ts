import { Injectable } from '@angular/core';
import { Request, Response } from 'proto/lsx';
import { BaseState } from 'proto/lsx.lockdown';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class BaseLockdownService {

  constructor(private readonly backend: BackendService) { }

  public async getBaseState(): Promise<BaseState> {
    const req: Request = {
        getBaseState: {}
    }

    const res: Response = await this.backend.request(req);
    return res.getBaseState!.state!;
  }

  public async setBaseState(state: BaseState): Promise<void> {
    const req: Request = {
        setBaseState: {state: state}
    }

    const res: Response = await this.backend.request(req);
  }

  public async getAutoLockdown(): Promise<boolean> {
    const req: Request = {
        getAutoLockdown: {}
    }

    const res: Response = await this.backend.request(req);
    return res.getAutoLockdown!.state!;
  }

  public async setAutoLockdown(state: boolean): Promise<void> {
    const req: Request = {
        setAutoLockdown: {state: state}
    }

    const res: Response = await this.backend.request(req);
  }

  public async getLockdownAnnouncements(): Promise<boolean> {
    const req: Request = {
        getLockdownAnnouncements: {}
    }

    const res: Response = await this.backend.request(req);
    return res.getLockdownAnnouncements!.state!;
  }

  public async setLockdownAnnouncements(state: boolean): Promise<void> {
    const req: Request = {
        setLockdownAnnouncements: {state: state}
    }

    const res: Response = await this.backend.request(req);
  }
}
