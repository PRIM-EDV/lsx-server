import { UseGuards } from "@nestjs/common";
import { AppGateway } from "src/app.gateway";
import { RolesGuard } from "src/common/guards/roles.guards";
import { Rpc, RpcHandler } from "lib/decorators";
import { LockdownService } from "./lockdown.service";
import { 
    GetAutoLockdown_Response, 
    GetLockdownAnnouncements_Response, 
    GetLockdownState_Response, SetAutoLockdown_Request, SetLockdownAnnouncements_Request, SetLockdownState_Request } from "proto/lsx.lockdown";
import { Ws } from "src/common/interfaces/ws";
import { Roles } from "src/common/decorators/roles.decorator";

@RpcHandler(AppGateway)
@UseGuards(RolesGuard)
export class LockdownController {

    constructor(
        private readonly gateway: AppGateway,
        private readonly service: LockdownService) { }

    @Rpc()
    @Roles(['admin'])
    public getAutoLockdown(): GetAutoLockdown_Response {
        return { state: this.service.autoLockdown };
    }

    @Rpc()
    @Roles(['admin'])
    public setAutoLockdown(client: Ws, req: SetAutoLockdown_Request) {
        this.service.setAutoLockdown(req.state);
        this.gateway.requestAllButOne(client.id, { setAutoLockdown: req }).then();
    }

    @Rpc()
    @Roles(['admin'])
    public getLockdownAnnouncements(): GetLockdownAnnouncements_Response {
        return { state: this.service.lockdownAnnouncements };
    }

    @Rpc()
    @Roles(['admin'])
    public setLockdownAnnouncements(client: Ws, req: SetLockdownAnnouncements_Request) {
        this.service.setLockdownAnnouncements(req.state);
        this.gateway.requestAll({ setLockdownAnnouncements: req }).then();
    }

    @Rpc()
    @Roles(['admin'])
    public getLockdownState(): GetLockdownState_Response {
        return { state: this.service.lockdownState };
    }

    @Rpc()
    @Roles(['admin'])
    public setLockdownState(client: Ws, req: SetLockdownState_Request) {
        this.service.setLockdownState(req.state);
        this.gateway.requestAllButOne(client.id, { setLockdownState: req }).then();
    }
}