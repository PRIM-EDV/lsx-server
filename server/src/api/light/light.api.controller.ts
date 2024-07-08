import { UseGuards } from "@nestjs/common";

import { AppGateway } from "src/app.gateway";
import { Roles } from "src/common/decorators/roles.decorator";
import { RolesGuard } from "src/common/guards/roles.guards";
import { Rpc, RpcHandler } from "src/core/rpc/decorators";
import { GetLightSwitchState_Request, GetLightSwitchState_Response, LightSwitchState, SetLightPowerState_Request, SetLightSwitchState, SetLightSwitchState_Request } from "proto/lsx.light";
import { Ws } from "src/common/interfaces/ws";
import { LightService } from "src/core/light/light.service";
import { PowerState } from "proto/lsx.power";


@RpcHandler(AppGateway)
@UseGuards(RolesGuard)
export class LightApiController {
    constructor(private readonly gateway: AppGateway, private readonly light: LightService) {

    }

    @Rpc()
    @Roles(['admin', 'tec'])
    public async getLightSwitchState(client: Ws, req: GetLightSwitchState_Request): Promise<GetLightSwitchState_Response> {
        return {
            state: LightSwitchState.SWITCH_STATE_OFF
        }
    }
    
    @Rpc()
    @Roles(['admin', 'tec'])
    public async setLightSwitchState(client: Ws, req: SetLightSwitchState_Request) {
        console.log(req);
        await this.light.setLightSwitchState(req.id, req.state);
        this.gateway.requestAllButOne(client.id, { setLightSwitchState: req }).then();
    }
}