import { UseGuards } from "@nestjs/common";
import { AppGateway } from "src/app.gateway";
import { RolesGuard } from "src/common/guards/roles.guards";
import { RpcHandler } from "lib/decorators";

@RpcHandler(AppGateway)
@UseGuards(RolesGuard)
export class SoundApiController {
    
}
