/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum ModeSilentState {
  MODE_SILENT_STATE_EMPTY = 0,
  MODE_SILENT_STATE_NORMAL = 1,
  MODE_SILENT_STATE_SILENT = 2,
  UNRECOGNIZED = -1,
}

export function modeSilentStateFromJSON(object: any): ModeSilentState {
  switch (object) {
    case 0:
    case "MODE_SILENT_STATE_EMPTY":
      return ModeSilentState.MODE_SILENT_STATE_EMPTY;
    case 1:
    case "MODE_SILENT_STATE_NORMAL":
      return ModeSilentState.MODE_SILENT_STATE_NORMAL;
    case 2:
    case "MODE_SILENT_STATE_SILENT":
      return ModeSilentState.MODE_SILENT_STATE_SILENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModeSilentState.UNRECOGNIZED;
  }
}

export function modeSilentStateToJSON(object: ModeSilentState): string {
  switch (object) {
    case ModeSilentState.MODE_SILENT_STATE_EMPTY:
      return "MODE_SILENT_STATE_EMPTY";
    case ModeSilentState.MODE_SILENT_STATE_NORMAL:
      return "MODE_SILENT_STATE_NORMAL";
    case ModeSilentState.MODE_SILENT_STATE_SILENT:
      return "MODE_SILENT_STATE_SILENT";
    case ModeSilentState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetModeSilentState {
  request?: GetModeSilentState_Request | undefined;
  response?: GetModeSilentState_Response | undefined;
  error: string | undefined;
}

export interface GetModeSilentState_Response {
  state: ModeSilentState;
}

export interface GetModeSilentState_Request {}

export interface SetModeSilentState {
  request?: SetModeSilentState_Request | undefined;
  response?: SetModeSilentState_Response | undefined;
  error: string | undefined;
}

export interface SetModeSilentState_Request {
  state: ModeSilentState;
}

export interface SetModeSilentState_Response {}

function createBaseGetModeSilentState(): GetModeSilentState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetModeSilentState = {
  encode(
    message: GetModeSilentState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetModeSilentState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetModeSilentState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetModeSilentState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModeSilentState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetModeSilentState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetModeSilentState_Response.decode(
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

  fromJSON(object: any): GetModeSilentState {
    return {
      request: isSet(object.request)
        ? GetModeSilentState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetModeSilentState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetModeSilentState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetModeSilentState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetModeSilentState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetModeSilentState>, I>>(
    object: I
  ): GetModeSilentState {
    const message = createBaseGetModeSilentState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetModeSilentState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetModeSilentState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetModeSilentState_Response(): GetModeSilentState_Response {
  return { state: 0 };
}

export const GetModeSilentState_Response = {
  encode(
    message: GetModeSilentState_Response,
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
  ): GetModeSilentState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModeSilentState_Response();
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

  fromJSON(object: any): GetModeSilentState_Response {
    return {
      state: isSet(object.state) ? modeSilentStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetModeSilentState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = modeSilentStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetModeSilentState_Response>, I>>(
    object: I
  ): GetModeSilentState_Response {
    const message = createBaseGetModeSilentState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetModeSilentState_Request(): GetModeSilentState_Request {
  return {};
}

export const GetModeSilentState_Request = {
  encode(
    _: GetModeSilentState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetModeSilentState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModeSilentState_Request();
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

  fromJSON(_: any): GetModeSilentState_Request {
    return {};
  },

  toJSON(_: GetModeSilentState_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetModeSilentState_Request>, I>>(
    _: I
  ): GetModeSilentState_Request {
    const message = createBaseGetModeSilentState_Request();
    return message;
  },
};

function createBaseSetModeSilentState(): SetModeSilentState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetModeSilentState = {
  encode(
    message: SetModeSilentState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetModeSilentState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetModeSilentState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetModeSilentState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetModeSilentState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetModeSilentState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetModeSilentState_Response.decode(
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

  fromJSON(object: any): SetModeSilentState {
    return {
      request: isSet(object.request)
        ? SetModeSilentState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetModeSilentState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetModeSilentState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetModeSilentState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetModeSilentState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetModeSilentState>, I>>(
    object: I
  ): SetModeSilentState {
    const message = createBaseSetModeSilentState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetModeSilentState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetModeSilentState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetModeSilentState_Request(): SetModeSilentState_Request {
  return { state: 0 };
}

export const SetModeSilentState_Request = {
  encode(
    message: SetModeSilentState_Request,
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
  ): SetModeSilentState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetModeSilentState_Request();
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

  fromJSON(object: any): SetModeSilentState_Request {
    return {
      state: isSet(object.state) ? modeSilentStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetModeSilentState_Request): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = modeSilentStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetModeSilentState_Request>, I>>(
    object: I
  ): SetModeSilentState_Request {
    const message = createBaseSetModeSilentState_Request();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetModeSilentState_Response(): SetModeSilentState_Response {
  return {};
}

export const SetModeSilentState_Response = {
  encode(
    _: SetModeSilentState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetModeSilentState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetModeSilentState_Response();
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

  fromJSON(_: any): SetModeSilentState_Response {
    return {};
  },

  toJSON(_: SetModeSilentState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetModeSilentState_Response>, I>>(
    _: I
  ): SetModeSilentState_Response {
    const message = createBaseSetModeSilentState_Response();
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
