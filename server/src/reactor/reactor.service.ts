import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

import { PowerGridState, PowerLineState } from 'proto/lsx';

export interface ReactorStates {
    powerGridState?: PowerGridState
} 

@Injectable()
export class ReactorService {

    public onStateChange: Subject<ReactorStates> = new Subject<ReactorStates>();

    private powerGridState: PowerGridState = {
        'ogBaseMed': PowerLineState.STATE_UNPOWERED,
        'ogParcelLeft': PowerLineState.STATE_UNPOWERED,
        'ogParcelRight': PowerLineState.STATE_UNPOWERED,
        'ugParcelLeft': PowerLineState.STATE_UNPOWERED,
        'ugParcelRight': PowerLineState.STATE_UNPOWERED
    }

    public getPowerGridState(): PowerGridState {
        return this.powerGridState;
    }

    public setPowerGridState(state: PowerGridState) {
        this.powerGridState = state;
        this.onStateChange.next({
            powerGridState: this.powerGridState
        })
    }
}
