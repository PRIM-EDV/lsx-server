/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum LockdownState {
  LOCKDOWN_STATE_EMPTY = 0,
  LOCKDOWN_STATE_NORMAL = 1,
  LOCKDOWN_STATE_LOCKDOWN = 2,
  UNRECOGNIZED = -1,
}

export function lockdownStateFromJSON(object: any): LockdownState {
  switch (object) {
    case 0:
    case "LOCKDOWN_STATE_EMPTY":
      return LockdownState.LOCKDOWN_STATE_EMPTY;
    case 1:
    case "LOCKDOWN_STATE_NORMAL":
      return LockdownState.LOCKDOWN_STATE_NORMAL;
    case 2:
    case "LOCKDOWN_STATE_LOCKDOWN":
      return LockdownState.LOCKDOWN_STATE_LOCKDOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LockdownState.UNRECOGNIZED;
  }
}

export function lockdownStateToJSON(object: LockdownState): string {
  switch (object) {
    case LockdownState.LOCKDOWN_STATE_EMPTY:
      return "LOCKDOWN_STATE_EMPTY";
    case LockdownState.LOCKDOWN_STATE_NORMAL:
      return "LOCKDOWN_STATE_NORMAL";
    case LockdownState.LOCKDOWN_STATE_LOCKDOWN:
      return "LOCKDOWN_STATE_LOCKDOWN";
    case LockdownState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetAutoLockdown {
  request?: GetAutoLockdown_Request | undefined;
  response?: GetAutoLockdown_Response | undefined;
  error: string | undefined;
}

export interface GetAutoLockdown_Response {
  state: boolean;
}

export interface GetAutoLockdown_Request {}

export interface SetAutoLockdown {
  request?: SetAutoLockdown_Request | undefined;
  response?: SetAutoLockdown_Response | undefined;
  error: string | undefined;
}

export interface SetAutoLockdown_Request {
  state: boolean;
}

export interface SetAutoLockdown_Response {}

export interface GetLockdownState {
  request?: GetLockdownState_Request | undefined;
  response?: GetLockdownState_Response | undefined;
  error: string | undefined;
}

export interface GetLockdownState_Response {
  state: LockdownState;
}

export interface GetLockdownState_Request {}

export interface SetLockdownState {
  request?: SetLockdownState_Request | undefined;
  response?: SetLockdownState_Response | undefined;
  error: string | undefined;
}

export interface SetLockdownState_Request {
  state: LockdownState;
}

export interface SetLockdownState_Response {}

export interface GetLockdownAnnouncements {
  request?: GetLockdownAnnouncements_Request | undefined;
  response?: GetLockdownAnnouncements_Response | undefined;
  error: string | undefined;
}

export interface GetLockdownAnnouncements_Response {
  state: boolean;
}

export interface GetLockdownAnnouncements_Request {}

export interface SetLockdownAnnouncements {
  request?: SetLockdownAnnouncements_Request | undefined;
  response?: SetLockdownAnnouncements_Response | undefined;
  error: string | undefined;
}

export interface SetLockdownAnnouncements_Request {
  state: boolean;
}

export interface SetLockdownAnnouncements_Response {}

function createBaseGetAutoLockdown(): GetAutoLockdown {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetAutoLockdown = {
  encode(
    message: GetAutoLockdown,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetAutoLockdown_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetAutoLockdown_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAutoLockdown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAutoLockdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetAutoLockdown_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetAutoLockdown_Response.decode(
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

  fromJSON(object: any): GetAutoLockdown {
    return {
      request: isSet(object.request)
        ? GetAutoLockdown_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetAutoLockdown_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetAutoLockdown): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetAutoLockdown_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetAutoLockdown_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAutoLockdown>, I>>(
    object: I
  ): GetAutoLockdown {
    const message = createBaseGetAutoLockdown();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetAutoLockdown_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetAutoLockdown_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetAutoLockdown_Response(): GetAutoLockdown_Response {
  return { state: false };
}

export const GetAutoLockdown_Response = {
  encode(
    message: GetAutoLockdown_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state === true) {
      writer.uint32(8).bool(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAutoLockdown_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAutoLockdown_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAutoLockdown_Response {
    return {
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: GetAutoLockdown_Response): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAutoLockdown_Response>, I>>(
    object: I
  ): GetAutoLockdown_Response {
    const message = createBaseGetAutoLockdown_Response();
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseGetAutoLockdown_Request(): GetAutoLockdown_Request {
  return {};
}

export const GetAutoLockdown_Request = {
  encode(
    _: GetAutoLockdown_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAutoLockdown_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAutoLockdown_Request();
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

  fromJSON(_: any): GetAutoLockdown_Request {
    return {};
  },

  toJSON(_: GetAutoLockdown_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAutoLockdown_Request>, I>>(
    _: I
  ): GetAutoLockdown_Request {
    const message = createBaseGetAutoLockdown_Request();
    return message;
  },
};

function createBaseSetAutoLockdown(): SetAutoLockdown {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetAutoLockdown = {
  encode(
    message: SetAutoLockdown,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetAutoLockdown_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetAutoLockdown_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAutoLockdown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAutoLockdown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetAutoLockdown_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetAutoLockdown_Response.decode(
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

  fromJSON(object: any): SetAutoLockdown {
    return {
      request: isSet(object.request)
        ? SetAutoLockdown_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetAutoLockdown_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetAutoLockdown): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetAutoLockdown_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetAutoLockdown_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetAutoLockdown>, I>>(
    object: I
  ): SetAutoLockdown {
    const message = createBaseSetAutoLockdown();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetAutoLockdown_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetAutoLockdown_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetAutoLockdown_Request(): SetAutoLockdown_Request {
  return { state: false };
}

export const SetAutoLockdown_Request = {
  encode(
    message: SetAutoLockdown_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state === true) {
      writer.uint32(8).bool(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetAutoLockdown_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAutoLockdown_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetAutoLockdown_Request {
    return {
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: SetAutoLockdown_Request): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetAutoLockdown_Request>, I>>(
    object: I
  ): SetAutoLockdown_Request {
    const message = createBaseSetAutoLockdown_Request();
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseSetAutoLockdown_Response(): SetAutoLockdown_Response {
  return {};
}

export const SetAutoLockdown_Response = {
  encode(
    _: SetAutoLockdown_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetAutoLockdown_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAutoLockdown_Response();
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

  fromJSON(_: any): SetAutoLockdown_Response {
    return {};
  },

  toJSON(_: SetAutoLockdown_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetAutoLockdown_Response>, I>>(
    _: I
  ): SetAutoLockdown_Response {
    const message = createBaseSetAutoLockdown_Response();
    return message;
  },
};

function createBaseGetLockdownState(): GetLockdownState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetLockdownState = {
  encode(
    message: GetLockdownState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetLockdownState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetLockdownState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLockdownState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockdownState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetLockdownState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetLockdownState_Response.decode(
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

  fromJSON(object: any): GetLockdownState {
    return {
      request: isSet(object.request)
        ? GetLockdownState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetLockdownState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetLockdownState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetLockdownState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetLockdownState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLockdownState>, I>>(
    object: I
  ): GetLockdownState {
    const message = createBaseGetLockdownState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetLockdownState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetLockdownState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetLockdownState_Response(): GetLockdownState_Response {
  return { state: 0 };
}

export const GetLockdownState_Response = {
  encode(
    message: GetLockdownState_Response,
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
  ): GetLockdownState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockdownState_Response();
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

  fromJSON(object: any): GetLockdownState_Response {
    return {
      state: isSet(object.state) ? lockdownStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetLockdownState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = lockdownStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLockdownState_Response>, I>>(
    object: I
  ): GetLockdownState_Response {
    const message = createBaseGetLockdownState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetLockdownState_Request(): GetLockdownState_Request {
  return {};
}

export const GetLockdownState_Request = {
  encode(
    _: GetLockdownState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLockdownState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockdownState_Request();
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

  fromJSON(_: any): GetLockdownState_Request {
    return {};
  },

  toJSON(_: GetLockdownState_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLockdownState_Request>, I>>(
    _: I
  ): GetLockdownState_Request {
    const message = createBaseGetLockdownState_Request();
    return message;
  },
};

function createBaseSetLockdownState(): SetLockdownState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetLockdownState = {
  encode(
    message: SetLockdownState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetLockdownState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetLockdownState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetLockdownState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLockdownState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetLockdownState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetLockdownState_Response.decode(
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

  fromJSON(object: any): SetLockdownState {
    return {
      request: isSet(object.request)
        ? SetLockdownState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetLockdownState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetLockdownState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetLockdownState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetLockdownState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLockdownState>, I>>(
    object: I
  ): SetLockdownState {
    const message = createBaseSetLockdownState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetLockdownState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetLockdownState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetLockdownState_Request(): SetLockdownState_Request {
  return { state: 0 };
}

export const SetLockdownState_Request = {
  encode(
    message: SetLockdownState_Request,
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
  ): SetLockdownState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLockdownState_Request();
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

  fromJSON(object: any): SetLockdownState_Request {
    return {
      state: isSet(object.state) ? lockdownStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetLockdownState_Request): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = lockdownStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLockdownState_Request>, I>>(
    object: I
  ): SetLockdownState_Request {
    const message = createBaseSetLockdownState_Request();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetLockdownState_Response(): SetLockdownState_Response {
  return {};
}

export const SetLockdownState_Response = {
  encode(
    _: SetLockdownState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLockdownState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLockdownState_Response();
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

  fromJSON(_: any): SetLockdownState_Response {
    return {};
  },

  toJSON(_: SetLockdownState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLockdownState_Response>, I>>(
    _: I
  ): SetLockdownState_Response {
    const message = createBaseSetLockdownState_Response();
    return message;
  },
};

function createBaseGetLockdownAnnouncements(): GetLockdownAnnouncements {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetLockdownAnnouncements = {
  encode(
    message: GetLockdownAnnouncements,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetLockdownAnnouncements_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetLockdownAnnouncements_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLockdownAnnouncements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockdownAnnouncements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetLockdownAnnouncements_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetLockdownAnnouncements_Response.decode(
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

  fromJSON(object: any): GetLockdownAnnouncements {
    return {
      request: isSet(object.request)
        ? GetLockdownAnnouncements_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetLockdownAnnouncements_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetLockdownAnnouncements): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetLockdownAnnouncements_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetLockdownAnnouncements_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLockdownAnnouncements>, I>>(
    object: I
  ): GetLockdownAnnouncements {
    const message = createBaseGetLockdownAnnouncements();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetLockdownAnnouncements_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetLockdownAnnouncements_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetLockdownAnnouncements_Response(): GetLockdownAnnouncements_Response {
  return { state: false };
}

export const GetLockdownAnnouncements_Response = {
  encode(
    message: GetLockdownAnnouncements_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state === true) {
      writer.uint32(8).bool(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLockdownAnnouncements_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockdownAnnouncements_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLockdownAnnouncements_Response {
    return {
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: GetLockdownAnnouncements_Response): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetLockdownAnnouncements_Response>, I>
  >(object: I): GetLockdownAnnouncements_Response {
    const message = createBaseGetLockdownAnnouncements_Response();
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseGetLockdownAnnouncements_Request(): GetLockdownAnnouncements_Request {
  return {};
}

export const GetLockdownAnnouncements_Request = {
  encode(
    _: GetLockdownAnnouncements_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetLockdownAnnouncements_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLockdownAnnouncements_Request();
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

  fromJSON(_: any): GetLockdownAnnouncements_Request {
    return {};
  },

  toJSON(_: GetLockdownAnnouncements_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetLockdownAnnouncements_Request>, I>
  >(_: I): GetLockdownAnnouncements_Request {
    const message = createBaseGetLockdownAnnouncements_Request();
    return message;
  },
};

function createBaseSetLockdownAnnouncements(): SetLockdownAnnouncements {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetLockdownAnnouncements = {
  encode(
    message: SetLockdownAnnouncements,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetLockdownAnnouncements_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetLockdownAnnouncements_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLockdownAnnouncements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLockdownAnnouncements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetLockdownAnnouncements_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetLockdownAnnouncements_Response.decode(
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

  fromJSON(object: any): SetLockdownAnnouncements {
    return {
      request: isSet(object.request)
        ? SetLockdownAnnouncements_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetLockdownAnnouncements_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetLockdownAnnouncements): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetLockdownAnnouncements_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetLockdownAnnouncements_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetLockdownAnnouncements>, I>>(
    object: I
  ): SetLockdownAnnouncements {
    const message = createBaseSetLockdownAnnouncements();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetLockdownAnnouncements_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetLockdownAnnouncements_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetLockdownAnnouncements_Request(): SetLockdownAnnouncements_Request {
  return { state: false };
}

export const SetLockdownAnnouncements_Request = {
  encode(
    message: SetLockdownAnnouncements_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state === true) {
      writer.uint32(8).bool(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLockdownAnnouncements_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLockdownAnnouncements_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetLockdownAnnouncements_Request {
    return {
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: SetLockdownAnnouncements_Request): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SetLockdownAnnouncements_Request>, I>
  >(object: I): SetLockdownAnnouncements_Request {
    const message = createBaseSetLockdownAnnouncements_Request();
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseSetLockdownAnnouncements_Response(): SetLockdownAnnouncements_Response {
  return {};
}

export const SetLockdownAnnouncements_Response = {
  encode(
    _: SetLockdownAnnouncements_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetLockdownAnnouncements_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetLockdownAnnouncements_Response();
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

  fromJSON(_: any): SetLockdownAnnouncements_Response {
    return {};
  },

  toJSON(_: SetLockdownAnnouncements_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SetLockdownAnnouncements_Response>, I>
  >(_: I): SetLockdownAnnouncements_Response {
    const message = createBaseSetLockdownAnnouncements_Response();
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
