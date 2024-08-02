import { Controller, UseGuards } from "@nestjs/common";

import { AppGateway } from "src/app.gateway";
import { Roles } from "src/common/decorators/roles.decorator";
import { RolesGuard } from "src/common/guards/roles.guards";
import { Rpc, RpcHandler } from "src/core/rpc/decorators";
import { GetLightPowerState_Request, GetLightPowerState_Response, SetLightPowerState_Request } from "proto/lsx.light";
import { Ws } from "src/common/interfaces/ws";
import { LightService } from "src/core/light/light.service";
import { PowerState } from "proto/lsx.power";


@Controller('api/power')
@RpcHandler(AppGateway)
@UseGuards(RolesGuard)
export class PowerApiController {
    constructor(private readonly gateway: AppGateway, private readonly light: LightService) {

    }

    @Rpc()
    @Roles(['admin', 'tec'])
    public async getLightPowerState(client: Ws, req: GetLightPowerState_Request): Promise<GetLightPowerState_Response> {
        return {
            state: PowerState.POWER_STATE_UNPOWERED
        }
    }
    
    @Rpc()
    @Roles(['admin', 'tec'])
    public async setLightPowerState(client: Ws, req: SetLightPowerState_Request) {
        this.light.setPowerState(req.id, req.state);
        this.gateway.requestAllButOne(client.id, { setLightPowerState: req }).then();
    }

    @Rpc()
    public async getDevicePowerState(client: Ws, req: GetLightPowerState_Request) {
    
    }
    
    @Rpc()
    @Roles(['admin', 'tec'])
    public async setDevicePowerState(client: Ws, req: SetLightPowerState_Request) {

    }

}