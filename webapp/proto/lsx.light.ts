/* eslint-disable */
import { PowerState, powerStateFromJSON, powerStateToJSON } from "./lsx.power";
import { LockState, lockStateFromJSON, lockStateToJSON } from "./lsx.common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum LightSwitchState {
  SWITCH_STATE_OFF = 0,
  SWITCH_STATE_ON = 1,
  UNRECOGNIZED = -1,
}

export function lightSwitchStateFromJSON(object: any): LightSwitchState {
  switch (object) {
    case 0:
    case "SWITCH_STATE_OFF":
      return LightSwitchState.SWITCH_STATE_OFF;
    case 1:
    case "SWITCH_STATE_ON":
      return LightSwitchState.SWITCH_STATE_ON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LightSwitchState.UNRECOGNIZED;
  }
}

export function lightSwitchStateToJSON(object: LightSwitchState): string {
  switch (object) {
    case LightSwitchState.SWITCH_STATE_OFF:
      return "SWITCH_STATE_OFF";
    case LightSwitchState.SWITCH_STATE_ON:
      return "SWITCH_STATE_ON";
    case LightSwitchState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum LightDMXState {
  DMX_STATE_EMPTY = 0,
  DMX_STATE_OFF = 1,
  DMX_STATE_WHITE = 2,
  DMX_STATE_RED = 3,
  DMX_STATE_FLICKER = 4,
  UNRECOGNIZED = -1,
}

export function lightDMXStateFromJSON(object: any): LightDMXState {
  switch (object) {
    case 0:
    case "DMX_STATE_EMPTY":
      return LightDMXState.DMX_STATE_EMPTY;
    case 1:
    case "DMX_STATE_OFF":
      return LightDMXState.DMX_STATE_OFF;
    case 2:
    case "DMX_STATE_WHITE":
      return LightDMXState.DMX_STATE_WHITE;
    case 3:
    case "DMX_STATE_RED":
      return LightDMXState.DMX_STATE_RED;
    case 4:
    case "DMX_STATE_FLICKER":
      return LightDMXState.DMX_STATE_FLICKER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LightDMXState.UNRECOGNIZED;
  }
}

export function lightDMXStateToJSON(object: LightDMXState): string {
  switch (object) {
    case LightDMXState.DMX_STATE_EMPTY:
      return "DMX_STATE_EMPTY";
    case LightDMXState.DMX_STATE_OFF:
      return "DMX_STATE_OFF";
    case LightDMXState.DMX_STATE_WHITE:
      return "DMX_STATE_WHITE";
    case LightDMXState.DMX_STATE_RED:
      return "DMX_STATE_RED";
    case LightDMXState.DMX_STATE_FLICKER:
      return "DMX_STATE_FLICKER";
    case LightDMXState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum LightId {
  LIGHT_EMPTY = 0,
  LIGHT_OG_BASE_MED = 1,
  LIGHT_OG_BASE_ADM = 2,
  LIGHT_OG_BASE_CIC = 3,
  LIGHT_OG_BASE_SCI = 4,
  LIGHT_OG_BASE_TEC = 5,
  LIGHT_OG_BASE_HC = 7,
  LIGHT_OG_HALL = 8,
  LIGHT_OG_COURTYARD = 9,
  LIGHT_OG_MESSHALL = 10,
  LIGHT_OG_GATE = 11,
  LIGHT_OG_PARCELS = 12,
  LIGHT_UG_PARCELS_LEFT = 13,
  LIGHT_UG_PARCELS_RIGHT = 14,
  LIGHT_UG_HALL = 15,
  LIGHT_OG_LOG = 16,
  UNRECOGNIZED = -1,
}

export function lightIdFromJSON(object: any): LightId {
  switch (object) {
    case 0:
    case "LIGHT_EMPTY":
      return LightId.LIGHT_EMPTY;
    case 1:
    case "LIGHT_OG_BASE_MED":
      return LightId.LIGHT_OG_BASE_MED;
    case 2:
    case "LIGHT_OG_BASE_ADM":
      return LightId.LIGHT_OG_BASE_ADM;
    case 3:
    case "LIGHT_OG_BASE_CIC":
      return LightId.LIGHT_OG_BASE_CIC;
    case 4:
    case "LIGHT_OG_BASE_SCI":
      return LightId.LIGHT_OG_BASE_SCI;
    case 5:
    case "LIGHT_OG_BASE_TEC":
      return LightId.LIGHT_OG_BASE_TEC;
    case 7:
    case "LIGHT_OG_BASE_HC":
      return LightId.LIGHT_OG_BASE_HC;
    case 8:
    case "LIGHT_OG_HALL":
      return LightId.LIGHT_OG_HALL;
    case 9:
    case "LIGHT_OG_COURTYARD":
      return LightId.LIGHT_OG_COURTYARD;
    case 10:
    case "LIGHT_OG_MESSHALL":
      return LightId.LIGHT_OG_MESSHALL;
    case 11:
    case "LIGHT_OG_GATE":
      return LightId.LIGHT_OG_GATE;
    case 12:
    case "LIGHT_OG_PARCELS":
      return LightId.LIGHT_OG_PARCELS;
    case 13:
    case "LIGHT_UG_PARCELS_LEFT":
      return LightId.LIGHT_UG_PARCELS_LEFT;
    case 14:
    case "LIGHT_UG_PARCELS_RIGHT":
      return LightId.LIGHT_UG_PARCELS_RIGHT;
    case 15:
    case "LIGHT_UG_HALL":
      return LightId.LIGHT_UG_HALL;
    case 16:
    case "LIGHT_OG_LOG":
      return LightId.LIGHT_OG_LOG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LightId.UNRECOGNIZED;
  }
}

export function lightIdToJSON(object: LightId): string {
  switch (object) {
    case LightId.LIGHT_EMPTY:
      return "LIGHT_EMPTY";
    case LightId.LIGHT_OG_BASE_MED:
      return "LIGHT_OG_BASE_MED";
    case LightId.LIGHT_OG_BASE_ADM:
      return "LIGHT_OG_BASE_ADM";
    case LightId.LIGHT_OG_BASE_CIC:
      return "LIGHT_OG_BASE_CIC";
    case LightId.LIGHT_OG_BASE_SCI:
      return "LIGHT_OG_BASE_SCI";
    case LightId.LIGHT_OG_BASE_TEC:
      return "LIGHT_OG_BASE_TEC";
    case LightId.LIGHT_OG_BASE_HC:
      return "LIGHT_OG_BASE_HC";
    case LightId.LIGHT_OG_HALL:
      return "LIGHT_OG_HALL";
    case LightId.LIGHT_OG_COURTYARD:
      return "LIGHT_OG_COURTYARD";
    case LightId.LIGHT_OG_MESSHALL:
      return "LIGHT_OG_MESSHALL";
    case LightId.LIGHT_OG_GATE:
      return "LIGHT_OG_GATE";
    case LightId.LIGHT_OG_PARCELS:
      return "LIGHT_OG_PARCELS";
    case LightId.LIGHT_UG_PARCELS_LEFT:
      return "LIGHT_UG_PARCELS_LEFT";
    case LightId.LIGHT_UG_PARCELS_RIGHT:
      return "LIGHT_UG_PARCELS_RIGHT";
    case LightId.LIGHT_UG_HALL:
      return "LIGHT_UG_HALL";
    case LightId.LIGHT_OG_LOG:
      return "LIGHT_OG_LOG";
    case LightId.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetLightPowerState {
  request?: GetLightPowerState_Request | undefined;
  response?: GetLightPowerState_Response | undefined;
  error: string | undefined;
}

export interface GetLightPowerState_Response {
  state: PowerState;
}

export interface GetLightPowerState_Request {
  id: LightId;
}

export interface SetLightPowerState {
  request?: SetLightPowerState_Request | undefined;
  response?: SetLightPowerState_Response | undefined;
  error: string | undefined;
}

export interface SetLightPowerState_Request {
  id: LightId;
  state: PowerState;
}

export interface SetLightPowerState_Response {}

export interface GetLightSwitchState {
  request?: GetLightSwitchState_Request | undefined;
  response?: GetLightSwitchState_Response | undefined;
  error: string | undefined;
}

export interface GetLightSwitchState_Response {
  state: LightSwitchState;
}

export interface GetLightSwitchState_Request {
  id: LightId;
}

export interface SetLightSwitchState {
  request?: SetLightSwitchState_Request | undefined;
  response?: SetLightSwitchState_Response | undefined;
  error: string | undefined;
}

export interface SetLightSwitchState_Request {
  id: LightId;
  state: LightSwitchState;
}

export interface SetLightSwitchState_Response {}

export interface GetLightDmxState {
  request?: GetLightDmxState_Request | undefined;
  response?: GetLightDmxState_Response | undefined;
  error: string | undefined;
}

export interface GetLightDmxState_Response {
  state: LightDMXState;
}

export interface GetLightDmxState_Request {
  id: LightId;
}

export interface SetLightDmxState {
  request?: SetLightDmxState_Request | undefined;
  response?: SetLightDmxState_Response | undefined;
  error: string | undefined;
}

export interface SetLightDmxState_Request {
  id: LightId;
  state: LightDMXState;
}

export interface SetLightDmxState_Response {}

export interface GetLightLockState {
  request?: GetLightLockState_Request | undefined;
  response?: GetLightLockState_Response | undefined;
  error: string | undefined;
}

export interface GetLightLockState_Response {
  state: LockState;
}

export interface GetLightLockState_Request {
  id: LightId;
}

export interface SetLightLockState {
  request?: SetLightLockState_Request | undefined;
  response?: SetLightLockState_Response | undefined;
  error: string | undefined;
}

export interface SetLightLockState_Request {
  id: LightId;
  state: LockState;
}

export interface SetLightLockState_Response {}

function createBaseGetLightPowerState(): GetLightPowerState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetLightPowerState = {
  encode(
    message: GetLightPowerState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetLightPowerState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetLightPowerState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLightPowerState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightPowerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetLightPowerState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetLightPowerState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightPowerState {
    return {
      request: isSet(object.request)
        ? GetLightPowerState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetLightPowerState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetLightPowerState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetLightPowerState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetLightPowerState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightPowerState>, I>>(
    object: I
  ): GetLightPowerState {
    const message = createBaseGetLightPowerState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetLightPowerState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetLightPowerState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetLightPowerState_Response(): GetLightPowerState_Response {
  return { state: 0 };
}

export const GetLightPowerState_Response = {
  encode(
    message: GetLightPowerState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLightPowerState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightPowerState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightPowerState_Response {
    return {
      state: isSet(object.state) ? powerStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetLightPowerState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = powerStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightPowerState_Response>, I>>(
    object: I
  ): GetLightPowerState_Response {
    const message = createBaseGetLightPowerState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetLightPowerState_Request(): GetLightPowerState_Request {
  return { id: 0 };
}

export const GetLightPowerState_Request = {
  encode(
    message: GetLightPowerState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLightPowerState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightPowerState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightPowerState_Request {
    return {
      id: isSet(object.id) ? lightIdFromJSON(object.id) : 0,
    };
  },

  toJSON(message: GetLightPowerState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = lightIdToJSON(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightPowerState_Request>, I>>(
    object: I
  ): GetLightPowerState_Request {
    const message = createBaseGetLightPowerState_Request();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseSetLightPowerState(): SetLightPowerState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetLightPowerState = {
  encode(
    message: SetLightPowerState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetLightPowerState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetLightPowerState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLightPowerState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightPowerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetLightPowerState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetLightPowerState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLightPowerState {
    return {
      request: isSet(object.request)
        ? SetLightPowerState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetLightPowerState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetLightPowerState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetLightPowerState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetLightPowerState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightPowerState>, I>>(
    object: I
  ): SetLightPowerState {
    const message = createBaseSetLightPowerState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetLightPowerState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetLightPowerState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetLightPowerState_Request(): SetLightPowerState_Request {
  return { id: 0, state: 0 };
}

export const SetLightPowerState_Request = {
  encode(
    message: SetLightPowerState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLightPowerState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightPowerState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLightPowerState_Request {
    return {
      id: isSet(object.id) ? lightIdFromJSON(object.id) : 0,
      state: isSet(object.state) ? powerStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetLightPowerState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = lightIdToJSON(message.id));
    message.state !== undefined &&
      (obj.state = powerStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightPowerState_Request>, I>>(
    object: I
  ): SetLightPowerState_Request {
    const message = createBaseSetLightPowerState_Request();
    message.id = object.id ?? 0;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetLightPowerState_Response(): SetLightPowerState_Response {
  return {};
}

export const SetLightPowerState_Response = {
  encode(
    _: SetLightPowerState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLightPowerState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightPowerState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetLightPowerState_Response {
    return {};
  },

  toJSON(_: SetLightPowerState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightPowerState_Response>, I>>(
    _: I
  ): SetLightPowerState_Response {
    const message = createBaseSetLightPowerState_Response();
    return message;
  },
};

function createBaseGetLightSwitchState(): GetLightSwitchState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetLightSwitchState = {
  encode(
    message: GetLightSwitchState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetLightSwitchState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetLightSwitchState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLightSwitchState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightSwitchState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetLightSwitchState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetLightSwitchState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightSwitchState {
    return {
      request: isSet(object.request)
        ? GetLightSwitchState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetLightSwitchState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetLightSwitchState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetLightSwitchState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetLightSwitchState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightSwitchState>, I>>(
    object: I
  ): GetLightSwitchState {
    const message = createBaseGetLightSwitchState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetLightSwitchState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetLightSwitchState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetLightSwitchState_Response(): GetLightSwitchState_Response {
  return { state: 0 };
}

export const GetLightSwitchState_Response = {
  encode(
    message: GetLightSwitchState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLightSwitchState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightSwitchState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightSwitchState_Response {
    return {
      state: isSet(object.state) ? lightSwitchStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetLightSwitchState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = lightSwitchStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightSwitchState_Response>, I>>(
    object: I
  ): GetLightSwitchState_Response {
    const message = createBaseGetLightSwitchState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetLightSwitchState_Request(): GetLightSwitchState_Request {
  return { id: 0 };
}

export const GetLightSwitchState_Request = {
  encode(
    message: GetLightSwitchState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLightSwitchState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightSwitchState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightSwitchState_Request {
    return {
      id: isSet(object.id) ? lightIdFromJSON(object.id) : 0,
    };
  },

  toJSON(message: GetLightSwitchState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = lightIdToJSON(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightSwitchState_Request>, I>>(
    object: I
  ): GetLightSwitchState_Request {
    const message = createBaseGetLightSwitchState_Request();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseSetLightSwitchState(): SetLightSwitchState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetLightSwitchState = {
  encode(
    message: SetLightSwitchState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetLightSwitchState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetLightSwitchState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLightSwitchState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightSwitchState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetLightSwitchState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetLightSwitchState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLightSwitchState {
    return {
      request: isSet(object.request)
        ? SetLightSwitchState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetLightSwitchState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetLightSwitchState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetLightSwitchState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetLightSwitchState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightSwitchState>, I>>(
    object: I
  ): SetLightSwitchState {
    const message = createBaseSetLightSwitchState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetLightSwitchState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetLightSwitchState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetLightSwitchState_Request(): SetLightSwitchState_Request {
  return { id: 0, state: 0 };
}

export const SetLightSwitchState_Request = {
  encode(
    message: SetLightSwitchState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLightSwitchState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightSwitchState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLightSwitchState_Request {
    return {
      id: isSet(object.id) ? lightIdFromJSON(object.id) : 0,
      state: isSet(object.state) ? lightSwitchStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetLightSwitchState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = lightIdToJSON(message.id));
    message.state !== undefined &&
      (obj.state = lightSwitchStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightSwitchState_Request>, I>>(
    object: I
  ): SetLightSwitchState_Request {
    const message = createBaseSetLightSwitchState_Request();
    message.id = object.id ?? 0;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetLightSwitchState_Response(): SetLightSwitchState_Response {
  return {};
}

export const SetLightSwitchState_Response = {
  encode(
    _: SetLightSwitchState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLightSwitchState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightSwitchState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetLightSwitchState_Response {
    return {};
  },

  toJSON(_: SetLightSwitchState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightSwitchState_Response>, I>>(
    _: I
  ): SetLightSwitchState_Response {
    const message = createBaseSetLightSwitchState_Response();
    return message;
  },
};

function createBaseGetLightDmxState(): GetLightDmxState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetLightDmxState = {
  encode(
    message: GetLightDmxState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetLightDmxState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetLightDmxState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLightDmxState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightDmxState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetLightDmxState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetLightDmxState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightDmxState {
    return {
      request: isSet(object.request)
        ? GetLightDmxState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetLightDmxState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetLightDmxState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetLightDmxState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetLightDmxState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightDmxState>, I>>(
    object: I
  ): GetLightDmxState {
    const message = createBaseGetLightDmxState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetLightDmxState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetLightDmxState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetLightDmxState_Response(): GetLightDmxState_Response {
  return { state: 0 };
}

export const GetLightDmxState_Response = {
  encode(
    message: GetLightDmxState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLightDmxState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightDmxState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightDmxState_Response {
    return {
      state: isSet(object.state) ? lightDMXStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetLightDmxState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = lightDMXStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightDmxState_Response>, I>>(
    object: I
  ): GetLightDmxState_Response {
    const message = createBaseGetLightDmxState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetLightDmxState_Request(): GetLightDmxState_Request {
  return { id: 0 };
}

export const GetLightDmxState_Request = {
  encode(
    message: GetLightDmxState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLightDmxState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightDmxState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightDmxState_Request {
    return {
      id: isSet(object.id) ? lightIdFromJSON(object.id) : 0,
    };
  },

  toJSON(message: GetLightDmxState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = lightIdToJSON(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightDmxState_Request>, I>>(
    object: I
  ): GetLightDmxState_Request {
    const message = createBaseGetLightDmxState_Request();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseSetLightDmxState(): SetLightDmxState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetLightDmxState = {
  encode(
    message: SetLightDmxState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetLightDmxState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetLightDmxState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLightDmxState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightDmxState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetLightDmxState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetLightDmxState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLightDmxState {
    return {
      request: isSet(object.request)
        ? SetLightDmxState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetLightDmxState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetLightDmxState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetLightDmxState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetLightDmxState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightDmxState>, I>>(
    object: I
  ): SetLightDmxState {
    const message = createBaseSetLightDmxState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetLightDmxState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetLightDmxState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetLightDmxState_Request(): SetLightDmxState_Request {
  return { id: 0, state: 0 };
}

export const SetLightDmxState_Request = {
  encode(
    message: SetLightDmxState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLightDmxState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightDmxState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLightDmxState_Request {
    return {
      id: isSet(object.id) ? lightIdFromJSON(object.id) : 0,
      state: isSet(object.state) ? lightDMXStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetLightDmxState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = lightIdToJSON(message.id));
    message.state !== undefined &&
      (obj.state = lightDMXStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightDmxState_Request>, I>>(
    object: I
  ): SetLightDmxState_Request {
    const message = createBaseSetLightDmxState_Request();
    message.id = object.id ?? 0;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetLightDmxState_Response(): SetLightDmxState_Response {
  return {};
}

export const SetLightDmxState_Response = {
  encode(
    _: SetLightDmxState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLightDmxState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightDmxState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetLightDmxState_Response {
    return {};
  },

  toJSON(_: SetLightDmxState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightDmxState_Response>, I>>(
    _: I
  ): SetLightDmxState_Response {
    const message = createBaseSetLightDmxState_Response();
    return message;
  },
};

function createBaseGetLightLockState(): GetLightLockState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetLightLockState = {
  encode(
    message: GetLightLockState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetLightLockState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetLightLockState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLightLockState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightLockState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetLightLockState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetLightLockState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightLockState {
    return {
      request: isSet(object.request)
        ? GetLightLockState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetLightLockState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetLightLockState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetLightLockState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetLightLockState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightLockState>, I>>(
    object: I
  ): GetLightLockState {
    const message = createBaseGetLightLockState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetLightLockState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetLightLockState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetLightLockState_Response(): GetLightLockState_Response {
  return { state: 0 };
}

export const GetLightLockState_Response = {
  encode(
    message: GetLightLockState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLightLockState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightLockState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightLockState_Response {
    return {
      state: isSet(object.state) ? lockStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetLightLockState_Response): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = lockStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightLockState_Response>, I>>(
    object: I
  ): GetLightLockState_Response {
    const message = createBaseGetLightLockState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetLightLockState_Request(): GetLightLockState_Request {
  return { id: 0 };
}

export const GetLightLockState_Request = {
  encode(
    message: GetLightLockState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLightLockState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLightLockState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLightLockState_Request {
    return {
      id: isSet(object.id) ? lightIdFromJSON(object.id) : 0,
    };
  },

  toJSON(message: GetLightLockState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = lightIdToJSON(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLightLockState_Request>, I>>(
    object: I
  ): GetLightLockState_Request {
    const message = createBaseGetLightLockState_Request();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseSetLightLockState(): SetLightLockState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetLightLockState = {
  encode(
    message: SetLightLockState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetLightLockState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetLightLockState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLightLockState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightLockState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetLightLockState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetLightLockState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLightLockState {
    return {
      request: isSet(object.request)
        ? SetLightLockState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetLightLockState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetLightLockState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetLightLockState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetLightLockState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightLockState>, I>>(
    object: I
  ): SetLightLockState {
    const message = createBaseSetLightLockState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetLightLockState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetLightLockState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetLightLockState_Request(): SetLightLockState_Request {
  return { id: 0, state: 0 };
}

export const SetLightLockState_Request = {
  encode(
    message: SetLightLockState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLightLockState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightLockState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32() as any;
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLightLockState_Request {
    return {
      id: isSet(object.id) ? lightIdFromJSON(object.id) : 0,
      state: isSet(object.state) ? lockStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetLightLockState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = lightIdToJSON(message.id));
    message.state !== undefined && (obj.state = lockStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightLockState_Request>, I>>(
    object: I
  ): SetLightLockState_Request {
    const message = createBaseSetLightLockState_Request();
    message.id = object.id ?? 0;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetLightLockState_Response(): SetLightLockState_Response {
  return {};
}

export const SetLightLockState_Response = {
  encode(
    _: SetLightLockState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLightLockState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLightLockState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetLightLockState_Response {
    return {};
  },

  toJSON(_: SetLightLockState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLightLockState_Response>, I>>(
    _: I
  ): SetLightLockState_Response {
    const message = createBaseSetLightLockState_Response();
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
