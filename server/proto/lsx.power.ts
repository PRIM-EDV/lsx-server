/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = '';

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
    case 'STATE_EMPTY':
      return PowerPlantState.STATE_EMPTY;
    case 1:
    case 'STATE_NORMAL':
      return PowerPlantState.STATE_NORMAL;
    case 2:
    case 'STATE_POWER_SAVING':
      return PowerPlantState.STATE_POWER_SAVING;
    case 3:
    case 'STATE_CRITICAL':
      return PowerPlantState.STATE_CRITICAL;
    case 4:
    case 'STATE_OFFLINE':
      return PowerPlantState.STATE_OFFLINE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PowerPlantState.UNRECOGNIZED;
  }
}

export function powerPlantStateToJSON(object: PowerPlantState): string {
  switch (object) {
    case PowerPlantState.STATE_EMPTY:
      return 'STATE_EMPTY';
    case PowerPlantState.STATE_NORMAL:
      return 'STATE_NORMAL';
    case PowerPlantState.STATE_POWER_SAVING:
      return 'STATE_POWER_SAVING';
    case PowerPlantState.STATE_CRITICAL:
      return 'STATE_CRITICAL';
    case PowerPlantState.STATE_OFFLINE:
      return 'STATE_OFFLINE';
    case PowerPlantState.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum PowerLineState {
  STATE_POWERED = 0,
  STATE_UNPOWERED = 1,
  UNRECOGNIZED = -1,
}

export function powerLineStateFromJSON(object: any): PowerLineState {
  switch (object) {
    case 0:
    case 'STATE_POWERED':
      return PowerLineState.STATE_POWERED;
    case 1:
    case 'STATE_UNPOWERED':
      return PowerLineState.STATE_UNPOWERED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PowerLineState.UNRECOGNIZED;
  }
}

export function powerLineStateToJSON(object: PowerLineState): string {
  switch (object) {
    case PowerLineState.STATE_POWERED:
      return 'STATE_POWERED';
    case PowerLineState.STATE_UNPOWERED:
      return 'STATE_UNPOWERED';
    case PowerLineState.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum PowerLineId {
  LINE_EMPTY = 0,
  LINE_OG_BASE_MED = 1,
  LINE_OG_BASE_ADM = 2,
  LINE_OG_BASE_CIC = 3,
  LINE_OG_BASE_SCI = 4,
  /**
   * LINE_OG_BASE_TEC - LINE_OG_PARCEL_LEFT = 2;
   * LINE_OG_BASE_MED = 1;
   * LINE_OG_BASE_MED = 1;
   */
  LINE_OG_BASE_TEC = 5,
  UNRECOGNIZED = -1,
}

export function powerLineIdFromJSON(object: any): PowerLineId {
  switch (object) {
    case 0:
    case 'LINE_EMPTY':
      return PowerLineId.LINE_EMPTY;
    case 1:
    case 'LINE_OG_BASE_MED':
      return PowerLineId.LINE_OG_BASE_MED;
    case 2:
    case 'LINE_OG_BASE_ADM':
      return PowerLineId.LINE_OG_BASE_ADM;
    case 3:
    case 'LINE_OG_BASE_CIC':
      return PowerLineId.LINE_OG_BASE_CIC;
    case 4:
    case 'LINE_OG_BASE_SCI':
      return PowerLineId.LINE_OG_BASE_SCI;
    case 5:
    case 'LINE_OG_BASE_TEC':
      return PowerLineId.LINE_OG_BASE_TEC;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return PowerLineId.UNRECOGNIZED;
  }
}

export function powerLineIdToJSON(object: PowerLineId): string {
  switch (object) {
    case PowerLineId.LINE_EMPTY:
      return 'LINE_EMPTY';
    case PowerLineId.LINE_OG_BASE_MED:
      return 'LINE_OG_BASE_MED';
    case PowerLineId.LINE_OG_BASE_ADM:
      return 'LINE_OG_BASE_ADM';
    case PowerLineId.LINE_OG_BASE_CIC:
      return 'LINE_OG_BASE_CIC';
    case PowerLineId.LINE_OG_BASE_SCI:
      return 'LINE_OG_BASE_SCI';
    case PowerLineId.LINE_OG_BASE_TEC:
      return 'LINE_OG_BASE_TEC';
    case PowerLineId.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface GetPowerLineState {
  request?: GetPowerLineState_Request | undefined;
  response?: GetPowerLineState_Response | undefined;
  error: string | undefined;
}

export interface GetPowerLineState_Response {
  state: PowerLineState;
}

export interface GetPowerLineState_Request {
  id: PowerLineId;
}

export interface SetPowerLineState {
  request?: SetPowerLineState_Request | undefined;
  response?: SetPowerLineState_Response | undefined;
  error: string | undefined;
}

export interface SetPowerLineState_Request {
  id: PowerLineId;
  state: PowerLineState;
}

export interface SetPowerLineState_Response {}

export interface GetPowerPlantState {
  request?: GetPowerPlantState_Request | undefined;
  response?: GetPowerPlantState_Response | undefined;
  error: string | undefined;
}

export interface GetPowerPlantState_Request {}

export interface GetPowerPlantState_Response {
  state: PowerPlantState;
}

export interface SetPowerPlantState {
  request?: SetPowerPlantState_Request | undefined;
  response?: SetPowerPlantState_Response | undefined;
  error: string | undefined;
}

export interface SetPowerPlantState_Request {
  state: PowerPlantState;
}

export interface SetPowerPlantState_Response {}

function createBaseGetPowerLineState(): GetPowerLineState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetPowerLineState = {
  encode(
    message: GetPowerLineState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetPowerLineState_Request.encode(
        message.request,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetPowerLineState_Response.encode(
        message.response,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPowerLineState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerLineState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetPowerLineState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.response = GetPowerLineState_Response.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): GetPowerLineState {
    return {
      request: isSet(object.request)
        ? GetPowerLineState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetPowerLineState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetPowerLineState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetPowerLineState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetPowerLineState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerLineState>, I>>(
    object: I,
  ): GetPowerLineState {
    const message = createBaseGetPowerLineState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetPowerLineState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetPowerLineState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetPowerLineState_Response(): GetPowerLineState_Response {
  return { state: 0 };
}

export const GetPowerLineState_Response = {
  encode(
    message: GetPowerLineState_Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetPowerLineState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerLineState_Response();
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

  fromJSON(object: any): GetPowerLineState_Response {
    return {
      state: isSet(object.state) ? powerLineStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetPowerLineState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = powerLineStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerLineState_Response>, I>>(
    object: I,
  ): GetPowerLineState_Response {
    const message = createBaseGetPowerLineState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetPowerLineState_Request(): GetPowerLineState_Request {
  return { id: 0 };
}

export const GetPowerLineState_Request = {
  encode(
    message: GetPowerLineState_Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GetPowerLineState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerLineState_Request();
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

  fromJSON(object: any): GetPowerLineState_Request {
    return {
      id: isSet(object.id) ? powerLineIdFromJSON(object.id) : 0,
    };
  },

  toJSON(message: GetPowerLineState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = powerLineIdToJSON(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerLineState_Request>, I>>(
    object: I,
  ): GetPowerLineState_Request {
    const message = createBaseGetPowerLineState_Request();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseSetPowerLineState(): SetPowerLineState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetPowerLineState = {
  encode(
    message: SetPowerLineState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetPowerLineState_Request.encode(
        message.request,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetPowerLineState_Response.encode(
        message.response,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPowerLineState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerLineState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetPowerLineState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.response = SetPowerLineState_Response.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): SetPowerLineState {
    return {
      request: isSet(object.request)
        ? SetPowerLineState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetPowerLineState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetPowerLineState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetPowerLineState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetPowerLineState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerLineState>, I>>(
    object: I,
  ): SetPowerLineState {
    const message = createBaseSetPowerLineState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetPowerLineState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetPowerLineState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetPowerLineState_Request(): SetPowerLineState_Request {
  return { id: 0, state: 0 };
}

export const SetPowerLineState_Request = {
  encode(
    message: SetPowerLineState_Request,
    writer: _m0.Writer = _m0.Writer.create(),
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
    length?: number,
  ): SetPowerLineState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerLineState_Request();
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

  fromJSON(object: any): SetPowerLineState_Request {
    return {
      id: isSet(object.id) ? powerLineIdFromJSON(object.id) : 0,
      state: isSet(object.state) ? powerLineStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: SetPowerLineState_Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = powerLineIdToJSON(message.id));
    message.state !== undefined &&
      (obj.state = powerLineStateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerLineState_Request>, I>>(
    object: I,
  ): SetPowerLineState_Request {
    const message = createBaseSetPowerLineState_Request();
    message.id = object.id ?? 0;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetPowerLineState_Response(): SetPowerLineState_Response {
  return {};
}

export const SetPowerLineState_Response = {
  encode(
    _: SetPowerLineState_Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SetPowerLineState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerLineState_Response();
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

  fromJSON(_: any): SetPowerLineState_Response {
    return {};
  },

  toJSON(_: SetPowerLineState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerLineState_Response>, I>>(
    _: I,
  ): SetPowerLineState_Response {
    const message = createBaseSetPowerLineState_Response();
    return message;
  },
};

function createBaseGetPowerPlantState(): GetPowerPlantState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetPowerPlantState = {
  encode(
    message: GetPowerPlantState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetPowerPlantState_Request.encode(
        message.request,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetPowerPlantState_Response.encode(
        message.response,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPowerPlantState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerPlantState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetPowerPlantState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.response = GetPowerPlantState_Response.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): GetPowerPlantState {
    return {
      request: isSet(object.request)
        ? GetPowerPlantState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetPowerPlantState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetPowerPlantState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetPowerPlantState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetPowerPlantState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerPlantState>, I>>(
    object: I,
  ): GetPowerPlantState {
    const message = createBaseGetPowerPlantState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetPowerPlantState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetPowerPlantState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetPowerPlantState_Request(): GetPowerPlantState_Request {
  return {};
}

export const GetPowerPlantState_Request = {
  encode(
    _: GetPowerPlantState_Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    _: I,
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
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    object: I,
  ): GetPowerPlantState_Response {
    const message = createBaseGetPowerPlantState_Response();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseSetPowerPlantState(): SetPowerPlantState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetPowerPlantState = {
  encode(
    message: SetPowerPlantState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetPowerPlantState_Request.encode(
        message.request,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetPowerPlantState_Response.encode(
        message.response,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPowerPlantState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerPlantState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetPowerPlantState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.response = SetPowerPlantState_Response.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): SetPowerPlantState {
    return {
      request: isSet(object.request)
        ? SetPowerPlantState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetPowerPlantState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetPowerPlantState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetPowerPlantState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetPowerPlantState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerPlantState>, I>>(
    object: I,
  ): SetPowerPlantState {
    const message = createBaseSetPowerPlantState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetPowerPlantState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetPowerPlantState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetPowerPlantState_Request(): SetPowerPlantState_Request {
  return { state: 0 };
}

export const SetPowerPlantState_Request = {
  encode(
    message: SetPowerPlantState_Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    object: I,
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
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    _: I,
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
