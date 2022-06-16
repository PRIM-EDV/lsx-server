/* eslint-disable */
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Empty } from '../google/protobuf/empty';

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

export interface Error {
  message: string;
}

export interface LsxMessage {
  id: string;
  getPowerPlantState?: GetPowerPlantState | undefined;
}

export interface GetPowerPlantState {
  request?: Empty | undefined;
  response?: GetPowerPlantState_Response | undefined;
  error?: Error | undefined;
}

export interface GetPowerPlantState_Response {
  state: PowerPlantState;
}

export interface SetPowerPlantState {
  request?: SetPowerPlantState_Request | undefined;
  response?: Empty | undefined;
  error?: Error | undefined;
}

export interface SetPowerPlantState_Request {
  state: PowerPlantState;
}

function createBaseError(): Error {
  return { message: '' };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      message: isSet(object.message) ? String(object.message) : '',
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseLsxMessage(): LsxMessage {
  return { id: '', getPowerPlantState: undefined };
}

export const LsxMessage = {
  encode(
    message: LsxMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.getPowerPlantState !== undefined) {
      GetPowerPlantState.encode(
        message.getPowerPlantState,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LsxMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLsxMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.getPowerPlantState = GetPowerPlantState.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LsxMessage {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      getPowerPlantState: isSet(object.getPowerPlantState)
        ? GetPowerPlantState.fromJSON(object.getPowerPlantState)
        : undefined,
    };
  },

  toJSON(message: LsxMessage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.getPowerPlantState !== undefined &&
      (obj.getPowerPlantState = message.getPowerPlantState
        ? GetPowerPlantState.toJSON(message.getPowerPlantState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LsxMessage>, I>>(
    object: I,
  ): LsxMessage {
    const message = createBaseLsxMessage();
    message.id = object.id ?? '';
    message.getPowerPlantState =
      object.getPowerPlantState !== undefined &&
      object.getPowerPlantState !== null
        ? GetPowerPlantState.fromPartial(object.getPowerPlantState)
        : undefined;
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
      Empty.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      GetPowerPlantState_Response.encode(
        message.response,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(26).fork()).ldelim();
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
          message.request = Empty.decode(reader, reader.uint32());
          break;
        case 2:
          message.response = GetPowerPlantState_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.error = Error.decode(reader, reader.uint32());
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
        ? Empty.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetPowerPlantState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetPowerPlantState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? Empty.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetPowerPlantState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerPlantState>, I>>(
    object: I,
  ): GetPowerPlantState {
    const message = createBaseGetPowerPlantState();
    message.request =
      object.request !== undefined && object.request !== null
        ? Empty.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetPowerPlantState_Response.fromPartial(object.response)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromPartial(object.error)
        : undefined;
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
      Empty.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(26).fork()).ldelim();
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
          message.response = Empty.decode(reader, reader.uint32());
          break;
        case 3:
          message.error = Error.decode(reader, reader.uint32());
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
        ? Empty.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
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
        ? Empty.toJSON(message.response)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
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
        ? Empty.fromPartial(object.response)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromPartial(object.error)
        : undefined;
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
