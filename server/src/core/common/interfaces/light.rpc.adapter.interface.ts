import { LightDMXState, LightId } from "proto/lsx.light";

export interface ILightRpcAdapter {
    setDmxState(id: LightId, state: LightDMXState): Promise<void>;
}