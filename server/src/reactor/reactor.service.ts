import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

import { PowerGridState, PowerLineState, PowerPlantState } from 'proto/lsx';

export interface ReactorStates {
    powerGridState?: PowerGridState,
    powerPlantState?: PowerPlantState
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

    private powerPlantState: PowerPlantState = PowerPlantState.STATE_NORMAL;

    public getPowerPlantState(): PowerPlantState {
        return this.powerPlantState;
    }

    public setPowerPlantState(state: PowerPlantState) {
        this.powerPlantState = state;
        this.onStateChange.next({
            powerGridState: this.powerGridState
        })
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
