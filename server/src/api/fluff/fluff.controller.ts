import { UseGuards } from "@nestjs/common";
import { GetFluffFiles_Response, GetFluffState_Response, SetFluffState_Request } from "proto/lsx.fluff";

import { AppGateway } from "src/app.gateway";
import { Roles } from "src/common/decorators/roles.decorator";
import { RolesGuard } from "src/common/guards/roles.guards";
import { Rpc, RpcHandler } from "src/core/rpc/decorators";
import { FluffService } from "./fluff.service";
import { Ws } from "src/common/interfaces/ws";


@RpcHandler(AppGateway)
@UseGuards(RolesGuard)
export class FluffController {
    constructor(
        private readonly gateway: AppGateway,
        private readonly service: FluffService,
    ) { }

    @Rpc()
    @Roles(['admin'])
    public async getFluffFiles(): Promise<GetFluffFiles_Response> {
        const files = await this.service.getFluffFiles();
        return {files: files};
    }

    @Rpc()
    @Roles(['admin'])
    public getFluffState(): GetFluffState_Response {
        return { state: this.service.fluffState }
    }

    @Rpc()
    @Roles(['admin'])
    public setFluffState(client: Ws, req: SetFluffState_Request) {
        this.service.fluffState = req.state;
        this.gateway.requestAllButOne(client.id, { setFluffState: req }).then();
    }
}