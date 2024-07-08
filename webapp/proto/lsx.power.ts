/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum PowerState {
  POWER_STATE_EMPTY = 0,
  POWER_STATE_POWERED = 1,
  POWER_STATE_CRITICAL = 2,
  POWER_STATE_UNPOWERED = 3,
  UNRECOGNIZED = -1,
}

export function powerStateFromJSON(object: any): PowerState {
  switch (object) {
    case 0:
    case "POWER_STATE_EMPTY":
      return PowerState.POWER_STATE_EMPTY;
    case 1:
    case "POWER_STATE_POWERED":
      return PowerState.POWER_STATE_POWERED;
    case 2:
    case "POWER_STATE_CRITICAL":
      return PowerState.POWER_STATE_CRITICAL;
    case 3:
    case "POWER_STATE_UNPOWERED":
      return PowerState.POWER_STATE_UNPOWERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PowerState.UNRECOGNIZED;
  }
}

export function powerStateToJSON(object: PowerState): string {
  switch (object) {
    case PowerState.POWER_STATE_EMPTY:
      return "POWER_STATE_EMPTY";
    case PowerState.POWER_STATE_POWERED:
      return "POWER_STATE_POWERED";
    case PowerState.POWER_STATE_CRITICAL:
      return "POWER_STATE_CRITICAL";
    case PowerState.POWER_STATE_UNPOWERED:
      return "POWER_STATE_UNPOWERED";
    case PowerState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PowerPlantState {
  STATE_EMPTY = 0,
  STATE_NORMAL = 1,
  STATE_POWER_SAVING = 2,
  STATE_CRITICAL = 3,
  STATE_OFFLINE = 4,
  UNRECOGNIZED = -1,
}

export function powerPlantStateFromJSON(object: any): PowerPlantState {
  switch (object) {
    case 0:
    case "STATE_EMPTY":
      return PowerPlantState.STATE_EMPTY;
    case 1:
    case "STATE_NORMAL":
      return PowerPlantState.STATE_NORMAL;
    case 2:
    case "STATE_POWER_SAVING":
      return PowerPlantState.STATE_POWER_SAVING;
    case 3:
    case "STATE_CRITICAL":
      return PowerPlantState.STATE_CRITICAL;
    case 4:
    case "STATE_OFFLINE":
      return PowerPlantState.STATE_OFFLINE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PowerPlantState.UNRECOGNIZED;
  }
}

export function powerPlantStateToJSON(object: PowerPlantState): string {
  switch (object) {
    case PowerPlantState.STATE_EMPTY:
      return "STATE_EMPTY";
    case PowerPlantState.STATE_NORMAL:
      return "STATE_NORMAL";
    case PowerPlantState.STATE_POWER_SAVING:
      return "STATE_POWER_SAVING";
    case PowerPlantState.STATE_CRITICAL:
      return "STATE_CRITICAL";
    case PowerPlantState.STATE_OFFLINE:
      return "STATE_OFFLINE";
    case PowerPlantState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetPowerPlantState {}

export interface GetPowerPlantState_Request {}

export interface GetPowerPlantState_Response {
  state: PowerPlantState;
}

export interface SetPowerPlantState {}

export interface SetPowerPlantState_Request {
  state: PowerPlantState;
}

export interface SetPowerPlantState_Response {}

function createBaseGetPowerPlantState(): GetPowerPlantState {
  return {};
}

export const GetPowerPlantState = {
  encode(
    _: GetPowerPlantState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPowerPlantState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerPlantState();
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

  fromJSON(_: any): GetPowerPlantState {
    return {};
  },

  toJSON(_: GetPowerPlantState): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerPlantState>, I>>(
    _: I
  ): GetPowerPlantState {
    const message = createBaseGetPowerPlantState();
    return message;
  },
};

function createBaseGetPowerPlantState_Request(): GetPowerPlantState_Request {
  return {};
}

export const GetPowerPlantState_Request = {
  encode(
    _: GetPowerPlantState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPowerPlantState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerPlantState_Request();
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

  fromJSON(_: any): GetPowerPlantState_Request {
    return {};
  },

  toJSON(_: GetPowerPlantState_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerPlantState_Request>, I>>(
    _: I
  ): GetPowerPlantState_Request {
    const message = createBaseGetPowerPlantState_Request();
    return message;
  },
};

function createBaseGetPowerPlantState_Response(): GetPowerPlantState_Response {
  return { state: 0 };
}

export const GetPowerPlantState_Response = {
  encode(
    message: GetPowerPlantState_Response,
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
  ): GetPowerPlantState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerPlantState_Response();
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

  fromJSON(object: any): GetPowerPlantState_Response {
    return {
      state: isSet(object.state) ? powerPlantStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetPowerPlantState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = powerPlantStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerPlantState_Response>, I>>(
    object: I
  ): GetPowerPlantState_Response {
    const message = createBaseGetPowerPlantState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetPowerPlantState(): SetPowerPlantState {
  return {};
}

export const SetPowerPlantState = {
  encode(
    _: SetPowerPlantState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPowerPlantState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerPlantState();
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

  fromJSON(_: any): SetPowerPlantState {
    return {};
  },

  toJSON(_: SetPowerPlantState): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerPlantState>, I>>(
    _: I
  ): SetPowerPlantState {
    const message = createBaseSetPowerPlantState();
    return message;
  },
};

function createBaseSetPowerPlantState_Request(): SetPowerPlantState_Request {
  return { state: 0 };
}

export const SetPowerPlantState_Request = {
  encode(
    message: SetPowerPlantState_Request,
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
  ): SetPowerPlantState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerPlantState_Request();
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

  fromJSON(object: any): SetPowerPlantState_Request {
    return {
      state: isSet(object.state) ? powerPlantStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetPowerPlantState_Request): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = powerPlantStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerPlantState_Request>, I>>(
    object: I
  ): SetPowerPlantState_Request {
    const message = createBaseSetPowerPlantState_Request();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetPowerPlantState_Response(): SetPowerPlantState_Response {
  return {};
}

export const SetPowerPlantState_Response = {
  encode(
    _: SetPowerPlantState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetPowerPlantState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerPlantState_Response();
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

  fromJSON(_: any): SetPowerPlantState_Response {
    return {};
  },

  toJSON(_: SetPowerPlantState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerPlantState_Response>, I>>(
    _: I
  ): SetPowerPlantState_Response {
    const message = createBaseSetPowerPlantState_Response();
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
