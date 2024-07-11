import { UseGuards } from "@nestjs/common";

import { AppGateway } from "src/app.gateway";
import { Roles } from "src/common/decorators/roles.decorator";
import { RolesGuard } from "src/common/guards/roles.guards";
import { Rpc, RpcHandler } from "src/core/rpc/decorators";
import { GetLightLockState_Response, GetLightSwitchState_Request, GetLightSwitchState_Response, LightSwitchState, SetLightLockState_Request, SetLightSwitchState_Request } from "proto/lsx.light";
import { Ws } from "src/common/interfaces/ws";
import { LightService } from "src/core/light/light.service";
import { JwtService } from "@nestjs/jwt";
import { LockState } from "proto/lsx.common";


@RpcHandler(AppGateway)
@UseGuards(RolesGuard)
export class LightApiController {
    constructor(
        private readonly gateway: AppGateway,
        private readonly jwtService: JwtService, 
        private readonly light: LightService
    ) { }

    @Rpc()
    @Roles(['admin', 'tec'])
    public async getLightSwitchState(client: Ws, req: GetLightSwitchState_Request): Promise<GetLightSwitchState_Response> {
        const state = this.light.getLightSwitchState(req.id);

        return {
            state: state
        }
    }
    
    @Rpc()
    @Roles(['admin', 'tec'])
    public async setLightSwitchState(client: Ws, req: SetLightSwitchState_Request) {
        const payload = await this.jwtService.decode(client.token);
        if (payload.role !== 'admin' && this.light.getLightLockState(req.id) === LockState.LOCK_STATE_LOCKED) {
            const state = this.light.getLightSwitchState(req.id);

            this.gateway.request(client.id, { setLightSwitchState: {id: req.id, state: state} }).then().catch(console.error);
            throw new Error('Light is locked');
        } else {
            await this.light.setLightSwitchState(req.id, req.state);
            this.gateway.requestAllButOne(client.id, { setLightSwitchState: req }).then().catch(console.error);
        }
    }

    @Rpc()
    @Roles(['admin', 'tec'])
    public async getLightLockState(client: Ws, req: GetLightSwitchState_Request): Promise<GetLightLockState_Response> {
        const state = this.light.getLightLockState(req.id);

        return {
            state: state
        }
    }

    @Rpc()
    @Roles(['admin'])
    public async setLightLockState(client: Ws, req: SetLightLockState_Request) {
        this.light.setLightLockState(req.id, req.state);
    }
}