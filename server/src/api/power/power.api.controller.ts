import { Controller, UnauthorizedException, UseGuards } from "@nestjs/common";

import { AppGateway } from "src/app.gateway";
import { Roles } from "src/common/decorators/roles.decorator";
import { RolesGuard } from "src/common/guards/roles.guards";
import { Rpc, RpcHandler } from "lib/decorators";
import { GetLightPowerState_Request, GetLightPowerState_Response, LightId, SetLightPowerState_Request } from "proto/lsx.light";
import { Ws } from "src/common/interfaces/ws";
import { LightService } from "src/core/light/light.service";
import { GetDevicePowerState, GetDevicePowerState_Request, GetDevicePowerState_Response, PowerDevice, PowerState, SetDevicePowerState_Request } from "proto/lsx.power";
import { JwtService } from "@nestjs/jwt";
import { LockState } from "proto/lsx.common";
import { DeviceService } from "src/core/device/device.service";
import { Lightline } from "src/core/light/lightline/lightline";


@Controller('api/power')
@RpcHandler(AppGateway)
@UseGuards(RolesGuard)
export class PowerApiController {
    constructor(
        private readonly gateway: AppGateway, 
        private readonly light: LightService,
        private readonly device: DeviceService,
        private readonly jwtService: JwtService
    ) {

    }

    @Rpc()
    @Roles(['admin', 'tec'])
    public async getLightPowerState(client: Ws, req: GetLightPowerState_Request): Promise<GetLightPowerState_Response> {
        const powerState = await this.light.getLightPowerState(req.id);
        return {
            state: powerState
        }
    }
    
    @Rpc()
    @Roles(['admin', 'tec'])
    public async setLightPowerState(client: Ws, req: SetLightPowerState_Request) {
        const payload = await this.jwtService.decode(client.token);
        const lock = this.light.getLightLockState(req.id);

        if (payload.role === 'tec' && lock == LockState.LOCK_STATE_LOCKED) {
            throw UnauthorizedException;
        } 

        this.light.setPowerState(req.id, req.state);
        this.gateway.requestAllButOne(client.id, { setLightPowerState: req }).then();
    }

    @Rpc()
    public async getDevicePowerState(client: Ws, req: GetDevicePowerState_Request): Promise<GetDevicePowerState_Response> {
        const powerState = this.device.getPowerState(req.device); 

        return {
            state: powerState
        }
    }
    
    @Rpc()
    @Roles(['admin', 'tec'])
    public async setDevicePowerState(client: Ws, req: SetDevicePowerState_Request) {
        if (req.device === PowerDevice.DEVICE_CIC_COFFEE) {
            const lightLine = this.light.lightlines.get(LightId.LIGHT_OG_BASE_CIC);

            if (req.state == PowerState.POWER_STATE_UNPOWERED) {
                Lightline.dmx.setCue(lightLine.flickerCue, 'STOP');
                Lightline.dmx.setCue(lightLine.staticCue, 'STEP', 1);
            } else {
                lightLine.update().then().catch(console.error);
            }
        } else if (req.device === PowerDevice.DEVICE_IRD_RAPIDCARE) {
            const lightLine = this.light.lightlines.get(LightId.LIGHT_OG_BASE_SCI);

            if (req.state == PowerState.POWER_STATE_UNPOWERED) {
                Lightline.dmx.setCue(lightLine.flickerCue, 'STOP');
                Lightline.dmx.setCue(lightLine.staticCue, 'STEP', 1);
            } else {
                lightLine.update().then().catch(console.error);
            }
        } else if ( req.device === PowerDevice.DEVICE_MED_OP_ROOM) {
            const lightLine = this.light.lightlines.get(LightId.LIGHT_OG_BASE_MED);

            if (req.state == PowerState.POWER_STATE_UNPOWERED) {
                Lightline.dmx.setCue(lightLine.flickerCue, 'STOP');
                Lightline.dmx.setCue(lightLine.staticCue, 'STEP', 1);
            } else {
                lightLine.update().then().catch(console.error);
            }

        } else {
            this.device.setPowerState(req.device, req.state);
        }
        this.gateway.requestAllButOne(client.id, { setDevicePowerState: req }).then();
    }

}