import { LightDMXState, LightId } from "proto/lsx.light";

export class LightChangedEvent {
    id: LightId;
    state: LightDMXState;

    constructor(id: LightId, state: LightDMXState) {
        this.id = id;
        this.state = state;
    }
}