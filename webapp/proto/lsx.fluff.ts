/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface GetFluffFiles {
  request?: GetFluffFiles_Request | undefined;
  response?: GetFluffFiles_Response | undefined;
  error: string | undefined;
}

export interface GetFluffFiles_Response {
  files: string[];
}

export interface GetFluffFiles_Request {}

export interface GetFluffState {
  request?: GetFluffState_Request | undefined;
  response?: GetFluffState_Response | undefined;
  error: string | undefined;
}

export interface GetFluffState_Response {
  state: boolean;
}

export interface GetFluffState_Request {}

export interface SetFluffState {
  request?: SetFluffState_Request | undefined;
  response?: SetFluffState_Response | undefined;
  error: string | undefined;
}

export interface SetFluffState_Request {
  state: boolean;
}

export interface SetFluffState_Response {}

function createBaseGetFluffFiles(): GetFluffFiles {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetFluffFiles = {
  encode(
    message: GetFluffFiles,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetFluffFiles_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetFluffFiles_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffFiles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffFiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetFluffFiles_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetFluffFiles_Response.decode(
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

  fromJSON(object: any): GetFluffFiles {
    return {
      request: isSet(object.request)
        ? GetFluffFiles_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetFluffFiles_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetFluffFiles): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetFluffFiles_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetFluffFiles_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffFiles>, I>>(
    object: I
  ): GetFluffFiles {
    const message = createBaseGetFluffFiles();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetFluffFiles_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetFluffFiles_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetFluffFiles_Response(): GetFluffFiles_Response {
  return { files: [] };
}

export const GetFluffFiles_Response = {
  encode(
    message: GetFluffFiles_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.files) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFluffFiles_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffFiles_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFluffFiles_Response {
    return {
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetFluffFiles_Response): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffFiles_Response>, I>>(
    object: I
  ): GetFluffFiles_Response {
    const message = createBaseGetFluffFiles_Response();
    message.files = object.files?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetFluffFiles_Request(): GetFluffFiles_Request {
  return {};
}

export const GetFluffFiles_Request = {
  encode(
    _: GetFluffFiles_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFluffFiles_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffFiles_Request();
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

  fromJSON(_: any): GetFluffFiles_Request {
    return {};
  },

  toJSON(_: GetFluffFiles_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffFiles_Request>, I>>(
    _: I
  ): GetFluffFiles_Request {
    const message = createBaseGetFluffFiles_Request();
    return message;
  },
};

function createBaseGetFluffState(): GetFluffState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetFluffState = {
  encode(
    message: GetFluffState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetFluffState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetFluffState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFluffState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetFluffState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetFluffState_Response.decode(
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

  fromJSON(object: any): GetFluffState {
    return {
      request: isSet(object.request)
        ? GetFluffState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetFluffState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetFluffState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetFluffState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetFluffState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffState>, I>>(
    object: I
  ): GetFluffState {
    const message = createBaseGetFluffState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetFluffState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetFluffState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetFluffState_Response(): GetFluffState_Response {
  return { state: false };
}

export const GetFluffState_Response = {
  encode(
    message: GetFluffState_Response,
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
  ): GetFluffState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffState_Response();
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

  fromJSON(object: any): GetFluffState_Response {
    return {
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: GetFluffState_Response): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffState_Response>, I>>(
    object: I
  ): GetFluffState_Response {
    const message = createBaseGetFluffState_Response();
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseGetFluffState_Request(): GetFluffState_Request {
  return {};
}

export const GetFluffState_Request = {
  encode(
    _: GetFluffState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFluffState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFluffState_Request();
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

  fromJSON(_: any): GetFluffState_Request {
    return {};
  },

  toJSON(_: GetFluffState_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFluffState_Request>, I>>(
    _: I
  ): GetFluffState_Request {
    const message = createBaseGetFluffState_Request();
    return message;
  },
};

function createBaseSetFluffState(): SetFluffState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetFluffState = {
  encode(
    message: SetFluffState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetFluffState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetFluffState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetFluffState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFluffState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetFluffState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetFluffState_Response.decode(
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

  fromJSON(object: any): SetFluffState {
    return {
      request: isSet(object.request)
        ? SetFluffState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetFluffState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SetFluffState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetFluffState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetFluffState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFluffState>, I>>(
    object: I
  ): SetFluffState {
    const message = createBaseSetFluffState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetFluffState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetFluffState_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSetFluffState_Request(): SetFluffState_Request {
  return { state: false };
}

export const SetFluffState_Request = {
  encode(
    message: SetFluffState_Request,
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
  ): SetFluffState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFluffState_Request();
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

  fromJSON(object: any): SetFluffState_Request {
    return {
      state: isSet(object.state) ? Boolean(object.state) : false,
    };
  },

  toJSON(message: SetFluffState_Request): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFluffState_Request>, I>>(
    object: I
  ): SetFluffState_Request {
    const message = createBaseSetFluffState_Request();
    message.state = object.state ?? false;
    return message;
  },
};

function createBaseSetFluffState_Response(): SetFluffState_Response {
  return {};
}

export const SetFluffState_Response = {
  encode(
    _: SetFluffState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetFluffState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFluffState_Response();
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

  fromJSON(_: any): SetFluffState_Response {
    return {};
  },

  toJSON(_: SetFluffState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFluffState_Response>, I>>(
    _: I
  ): SetFluffState_Response {
    const message = createBaseSetFluffState_Response();
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
