import { Injectable } from '@nestjs/common';
import { PowerLineId, PowerLineState, PowerPlantState } from 'proto/lsx.power';


@Injectable()
export class StateService {

    public powerLineStates = new Map<PowerLineId, PowerLineState>([
        [PowerLineId.LINE_OG_BASE_CIC, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_BASE_MED, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_BASE_SCI, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_BASE_TEC, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_BASE_HC, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_GATE, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_MESSHALL, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_COURTYARD, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_PARCELS, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_BASE_ADM, PowerLineState.STATE_POWERED],
        [PowerLineId.LINE_OG_LOG, PowerLineState.STATE_POWERED]
    ]);

    public powerPlantState: PowerPlantState = PowerPlantState.STATE_NORMAL;
}