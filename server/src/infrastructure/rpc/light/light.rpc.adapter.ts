import { Injectable } from '@nestjs/common';
import { Request } from 'proto/lsx';
import { LightDMXState, LightId } from 'proto/lsx.light';
import { AppGateway } from 'src/app.gateway';
import { ILightRpcAdapter } from 'src/core/common/interfaces/light.rpc.adapter.interface';

@Injectable()
export class LightRpcAdapter implements ILightRpcAdapter {
    constructor(private readonly gateway: AppGateway) {}
    
    async setDmxState(id: LightId, state: LightDMXState): Promise<void> {
        const req: Request = { setLightDmxState: { id, state } };
        this.gateway.requestAll(req);
    }
}