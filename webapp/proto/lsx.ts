/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

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

export enum PowerLineState {
  STATE_POWERED = 0,
  STATE_UNPOWERED = 1,
  UNRECOGNIZED = -1,
}

export function powerLineStateFromJSON(object: any): PowerLineState {
  switch (object) {
    case 0:
    case "STATE_POWERED":
      return PowerLineState.STATE_POWERED;
    case 1:
    case "STATE_UNPOWERED":
      return PowerLineState.STATE_UNPOWERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PowerLineState.UNRECOGNIZED;
  }
}

export function powerLineStateToJSON(object: PowerLineState): string {
  switch (object) {
    case PowerLineState.STATE_POWERED:
      return "STATE_POWERED";
    case PowerLineState.STATE_UNPOWERED:
      return "STATE_UNPOWERED";
    case PowerLineState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Error {
  message: string;
}

export interface Request {
  getPowerPlantState?: GetPowerPlantState_Request | undefined;
  setPowerPlantState?: SetPowerPlantState_Request | undefined;
  getPowerGridState?: GetPowerGridState_Request | undefined;
  setPowerGridState?: SetPowerGridState_Request | undefined;
}

export interface Response {
  getPowerPlantState?: GetPowerPlantState_Response | undefined;
  setPowerPlantState?: SetPowerPlantState_Response | undefined;
  getPowerGridState?: GetPowerGridState_Response | undefined;
  setPowerGridState?: SetPowerGridState_Response | undefined;
}

export interface LsxMessage {
  id: string;
  request?: Request | undefined;
  response?: Response | undefined;
}

export interface PowerGridState {
  ogBaseMed: PowerLineState;
  ogParcelLeft: PowerLineState;
  ogParcelRight: PowerLineState;
  ugParcelLeft: PowerLineState;
  ugParcelRight: PowerLineState;
}

export interface GetPowerGridState {
  request?: GetPowerGridState_Request | undefined;
  response?: GetPowerGridState_Response | undefined;
  error?: Error | undefined;
}

export interface GetPowerGridState_Response {
  state?: PowerGridState;
}

export interface GetPowerGridState_Request {}

export interface SetPowerGridState {
  request?: SetPowerGridState_Request | undefined;
  response?: SetPowerGridState_Response | undefined;
  error?: Error | undefined;
}

export interface SetPowerGridState_Request {
  state?: PowerGridState;
}

export interface SetPowerGridState_Response {}

export interface GetPowerPlantState {
  request?: GetPowerPlantState_Request | undefined;
  response?: GetPowerPlantState_Response | undefined;
  error?: Error | undefined;
}

export interface GetPowerPlantState_Request {}

export interface GetPowerPlantState_Response {
  state: PowerPlantState;
}

export interface SetPowerPlantState {
  request?: SetPowerPlantState_Request | undefined;
  response?: SetPowerPlantState_Response | undefined;
  error?: Error | undefined;
}

export interface SetPowerPlantState_Request {
  state: PowerPlantState;
}

export interface SetPowerPlantState_Response {}

function createBaseError(): Error {
  return { message: "" };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
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
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseRequest(): Request {
  return {
    getPowerPlantState: undefined,
    setPowerPlantState: undefined,
    getPowerGridState: undefined,
    setPowerGridState: undefined,
  };
}

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.getPowerPlantState !== undefined) {
      GetPowerPlantState_Request.encode(
        message.getPowerPlantState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.setPowerPlantState !== undefined) {
      SetPowerPlantState_Request.encode(
        message.setPowerPlantState,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.getPowerGridState !== undefined) {
      GetPowerGridState_Request.encode(
        message.getPowerGridState,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.setPowerGridState !== undefined) {
      SetPowerGridState_Request.encode(
        message.setPowerGridState,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.getPowerPlantState = GetPowerPlantState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.setPowerPlantState = SetPowerPlantState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.getPowerGridState = GetPowerGridState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.setPowerGridState = SetPowerGridState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      getPowerPlantState: isSet(object.getPowerPlantState)
        ? GetPowerPlantState_Request.fromJSON(object.getPowerPlantState)
        : undefined,
      setPowerPlantState: isSet(object.setPowerPlantState)
        ? SetPowerPlantState_Request.fromJSON(object.setPowerPlantState)
        : undefined,
      getPowerGridState: isSet(object.getPowerGridState)
        ? GetPowerGridState_Request.fromJSON(object.getPowerGridState)
        : undefined,
      setPowerGridState: isSet(object.setPowerGridState)
        ? SetPowerGridState_Request.fromJSON(object.setPowerGridState)
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.getPowerPlantState !== undefined &&
      (obj.getPowerPlantState = message.getPowerPlantState
        ? GetPowerPlantState_Request.toJSON(message.getPowerPlantState)
        : undefined);
    message.setPowerPlantState !== undefined &&
      (obj.setPowerPlantState = message.setPowerPlantState
        ? SetPowerPlantState_Request.toJSON(message.setPowerPlantState)
        : undefined);
    message.getPowerGridState !== undefined &&
      (obj.getPowerGridState = message.getPowerGridState
        ? GetPowerGridState_Request.toJSON(message.getPowerGridState)
        : undefined);
    message.setPowerGridState !== undefined &&
      (obj.setPowerGridState = message.setPowerGridState
        ? SetPowerGridState_Request.toJSON(message.setPowerGridState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.getPowerPlantState =
      object.getPowerPlantState !== undefined &&
      object.getPowerPlantState !== null
        ? GetPowerPlantState_Request.fromPartial(object.getPowerPlantState)
        : undefined;
    message.setPowerPlantState =
      object.setPowerPlantState !== undefined &&
      object.setPowerPlantState !== null
        ? SetPowerPlantState_Request.fromPartial(object.setPowerPlantState)
        : undefined;
    message.getPowerGridState =
      object.getPowerGridState !== undefined &&
      object.getPowerGridState !== null
        ? GetPowerGridState_Request.fromPartial(object.getPowerGridState)
        : undefined;
    message.setPowerGridState =
      object.setPowerGridState !== undefined &&
      object.setPowerGridState !== null
        ? SetPowerGridState_Request.fromPartial(object.setPowerGridState)
        : undefined;
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    getPowerPlantState: undefined,
    setPowerPlantState: undefined,
    getPowerGridState: undefined,
    setPowerGridState: undefined,
  };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.getPowerPlantState !== undefined) {
      GetPowerPlantState_Response.encode(
        message.getPowerPlantState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.setPowerPlantState !== undefined) {
      SetPowerPlantState_Response.encode(
        message.setPowerPlantState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.getPowerGridState !== undefined) {
      GetPowerGridState_Response.encode(
        message.getPowerGridState,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.setPowerGridState !== undefined) {
      SetPowerGridState_Response.encode(
        message.setPowerGridState,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.getPowerPlantState = GetPowerPlantState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.setPowerPlantState = SetPowerPlantState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.getPowerGridState = GetPowerGridState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.setPowerGridState = SetPowerGridState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      getPowerPlantState: isSet(object.getPowerPlantState)
        ? GetPowerPlantState_Response.fromJSON(object.getPowerPlantState)
        : undefined,
      setPowerPlantState: isSet(object.setPowerPlantState)
        ? SetPowerPlantState_Response.fromJSON(object.setPowerPlantState)
        : undefined,
      getPowerGridState: isSet(object.getPowerGridState)
        ? GetPowerGridState_Response.fromJSON(object.getPowerGridState)
        : undefined,
      setPowerGridState: isSet(object.setPowerGridState)
        ? SetPowerGridState_Response.fromJSON(object.setPowerGridState)
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.getPowerPlantState !== undefined &&
      (obj.getPowerPlantState = message.getPowerPlantState
        ? GetPowerPlantState_Response.toJSON(message.getPowerPlantState)
        : undefined);
    message.setPowerPlantState !== undefined &&
      (obj.setPowerPlantState = message.setPowerPlantState
        ? SetPowerPlantState_Response.toJSON(message.setPowerPlantState)
        : undefined);
    message.getPowerGridState !== undefined &&
      (obj.getPowerGridState = message.getPowerGridState
        ? GetPowerGridState_Response.toJSON(message.getPowerGridState)
        : undefined);
    message.setPowerGridState !== undefined &&
      (obj.setPowerGridState = message.setPowerGridState
        ? SetPowerGridState_Response.toJSON(message.setPowerGridState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.getPowerPlantState =
      object.getPowerPlantState !== undefined &&
      object.getPowerPlantState !== null
        ? GetPowerPlantState_Response.fromPartial(object.getPowerPlantState)
        : undefined;
    message.setPowerPlantState =
      object.setPowerPlantState !== undefined &&
      object.setPowerPlantState !== null
        ? SetPowerPlantState_Response.fromPartial(object.setPowerPlantState)
        : undefined;
    message.getPowerGridState =
      object.getPowerGridState !== undefined &&
      object.getPowerGridState !== null
        ? GetPowerGridState_Response.fromPartial(object.getPowerGridState)
        : undefined;
    message.setPowerGridState =
      object.setPowerGridState !== undefined &&
      object.setPowerGridState !== null
        ? SetPowerGridState_Response.fromPartial(object.setPowerGridState)
        : undefined;
    return message;
  },
};

function createBaseLsxMessage(): LsxMessage {
  return { id: "", request: undefined, response: undefined };
}

export const LsxMessage = {
  encode(
    message: LsxMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(18).fork()).ldelim();
    }
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(26).fork()).ldelim();
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
          message.request = Request.decode(reader, reader.uint32());
          break;
        case 3:
          message.response = Response.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? String(object.id) : "",
      request: isSet(object.request)
        ? Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? Response.fromJSON(object.response)
        : undefined,
    };
  },

  toJSON(message: LsxMessage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? Response.toJSON(message.response)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LsxMessage>, I>>(
    object: I
  ): LsxMessage {
    const message = createBaseLsxMessage();
    message.id = object.id ?? "";
    message.request =
      object.request !== undefined && object.request !== null
        ? Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? Response.fromPartial(object.response)
        : undefined;
    return message;
  },
};

function createBasePowerGridState(): PowerGridState {
  return {
    ogBaseMed: 0,
    ogParcelLeft: 0,
    ogParcelRight: 0,
    ugParcelLeft: 0,
    ugParcelRight: 0,
  };
}

export const PowerGridState = {
  encode(
    message: PowerGridState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ogBaseMed !== 0) {
      writer.uint32(8).int32(message.ogBaseMed);
    }
    if (message.ogParcelLeft !== 0) {
      writer.uint32(16).int32(message.ogParcelLeft);
    }
    if (message.ogParcelRight !== 0) {
      writer.uint32(24).int32(message.ogParcelRight);
    }
    if (message.ugParcelLeft !== 0) {
      writer.uint32(32).int32(message.ugParcelLeft);
    }
    if (message.ugParcelRight !== 0) {
      writer.uint32(40).int32(message.ugParcelRight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PowerGridState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePowerGridState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ogBaseMed = reader.int32() as any;
          break;
        case 2:
          message.ogParcelLeft = reader.int32() as any;
          break;
        case 3:
          message.ogParcelRight = reader.int32() as any;
          break;
        case 4:
          message.ugParcelLeft = reader.int32() as any;
          break;
        case 5:
          message.ugParcelRight = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PowerGridState {
    return {
      ogBaseMed: isSet(object.ogBaseMed)
        ? powerLineStateFromJSON(object.ogBaseMed)
        : 0,
      ogParcelLeft: isSet(object.ogParcelLeft)
        ? powerLineStateFromJSON(object.ogParcelLeft)
        : 0,
      ogParcelRight: isSet(object.ogParcelRight)
        ? powerLineStateFromJSON(object.ogParcelRight)
        : 0,
      ugParcelLeft: isSet(object.ugParcelLeft)
        ? powerLineStateFromJSON(object.ugParcelLeft)
        : 0,
      ugParcelRight: isSet(object.ugParcelRight)
        ? powerLineStateFromJSON(object.ugParcelRight)
        : 0,
    };
  },

  toJSON(message: PowerGridState): unknown {
    const obj: any = {};
    message.ogBaseMed !== undefined &&
      (obj.ogBaseMed = powerLineStateToJSON(message.ogBaseMed));
    message.ogParcelLeft !== undefined &&
      (obj.ogParcelLeft = powerLineStateToJSON(message.ogParcelLeft));
    message.ogParcelRight !== undefined &&
      (obj.ogParcelRight = powerLineStateToJSON(message.ogParcelRight));
    message.ugParcelLeft !== undefined &&
      (obj.ugParcelLeft = powerLineStateToJSON(message.ugParcelLeft));
    message.ugParcelRight !== undefined &&
      (obj.ugParcelRight = powerLineStateToJSON(message.ugParcelRight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PowerGridState>, I>>(
    object: I
  ): PowerGridState {
    const message = createBasePowerGridState();
    message.ogBaseMed = object.ogBaseMed ?? 0;
    message.ogParcelLeft = object.ogParcelLeft ?? 0;
    message.ogParcelRight = object.ogParcelRight ?? 0;
    message.ugParcelLeft = object.ugParcelLeft ?? 0;
    message.ugParcelRight = object.ugParcelRight ?? 0;
    return message;
  },
};

function createBaseGetPowerGridState(): GetPowerGridState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetPowerGridState = {
  encode(
    message: GetPowerGridState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetPowerGridState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetPowerGridState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPowerGridState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerGridState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetPowerGridState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetPowerGridState_Response.decode(
            reader,
            reader.uint32()
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

  fromJSON(object: any): GetPowerGridState {
    return {
      request: isSet(object.request)
        ? GetPowerGridState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetPowerGridState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetPowerGridState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetPowerGridState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetPowerGridState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerGridState>, I>>(
    object: I
  ): GetPowerGridState {
    const message = createBaseGetPowerGridState();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetPowerGridState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetPowerGridState_Response.fromPartial(object.response)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseGetPowerGridState_Response(): GetPowerGridState_Response {
  return { state: undefined };
}

export const GetPowerGridState_Response = {
  encode(
    message: GetPowerGridState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== undefined) {
      PowerGridState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPowerGridState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerGridState_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = PowerGridState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPowerGridState_Response {
    return {
      state: isSet(object.state)
        ? PowerGridState.fromJSON(object.state)
        : undefined,
    };
  },

  toJSON(message: GetPowerGridState_Response): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = message.state
        ? PowerGridState.toJSON(message.state)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerGridState_Response>, I>>(
    object: I
  ): GetPowerGridState_Response {
    const message = createBaseGetPowerGridState_Response();
    message.state =
      object.state !== undefined && object.state !== null
        ? PowerGridState.fromPartial(object.state)
        : undefined;
    return message;
  },
};

function createBaseGetPowerGridState_Request(): GetPowerGridState_Request {
  return {};
}

export const GetPowerGridState_Request = {
  encode(
    _: GetPowerGridState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetPowerGridState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPowerGridState_Request();
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

  fromJSON(_: any): GetPowerGridState_Request {
    return {};
  },

  toJSON(_: GetPowerGridState_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPowerGridState_Request>, I>>(
    _: I
  ): GetPowerGridState_Request {
    const message = createBaseGetPowerGridState_Request();
    return message;
  },
};

function createBaseSetPowerGridState(): SetPowerGridState {
  return { request: undefined, response: undefined, error: undefined };
}

export const SetPowerGridState = {
  encode(
    message: SetPowerGridState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetPowerGridState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetPowerGridState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPowerGridState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerGridState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = SetPowerGridState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetPowerGridState_Response.decode(
            reader,
            reader.uint32()
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

  fromJSON(object: any): SetPowerGridState {
    return {
      request: isSet(object.request)
        ? SetPowerGridState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetPowerGridState_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SetPowerGridState): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? SetPowerGridState_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? SetPowerGridState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerGridState>, I>>(
    object: I
  ): SetPowerGridState {
    const message = createBaseSetPowerGridState();
    message.request =
      object.request !== undefined && object.request !== null
        ? SetPowerGridState_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? SetPowerGridState_Response.fromPartial(object.response)
        : undefined;
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromPartial(object.error)
        : undefined;
    return message;
  },
};

function createBaseSetPowerGridState_Request(): SetPowerGridState_Request {
  return { state: undefined };
}

export const SetPowerGridState_Request = {
  encode(
    message: SetPowerGridState_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== undefined) {
      PowerGridState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetPowerGridState_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerGridState_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = PowerGridState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetPowerGridState_Request {
    return {
      state: isSet(object.state)
        ? PowerGridState.fromJSON(object.state)
        : undefined,
    };
  },

  toJSON(message: SetPowerGridState_Request): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = message.state
        ? PowerGridState.toJSON(message.state)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerGridState_Request>, I>>(
    object: I
  ): SetPowerGridState_Request {
    const message = createBaseSetPowerGridState_Request();
    message.state =
      object.state !== undefined && object.state !== null
        ? PowerGridState.fromPartial(object.state)
        : undefined;
    return message;
  },
};

function createBaseSetPowerGridState_Response(): SetPowerGridState_Response {
  return {};
}

export const SetPowerGridState_Response = {
  encode(
    _: SetPowerGridState_Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetPowerGridState_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPowerGridState_Response();
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

  fromJSON(_: any): SetPowerGridState_Response {
    return {};
  },

  toJSON(_: SetPowerGridState_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerGridState_Response>, I>>(
    _: I
  ): SetPowerGridState_Response {
    const message = createBaseSetPowerGridState_Response();
    return message;
  },
};

function createBaseGetPowerPlantState(): GetPowerPlantState {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetPowerPlantState = {
  encode(
    message: GetPowerPlantState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetPowerPlantState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetPowerPlantState_Response.encode(
        message.response,
        writer.uint32(18).fork()
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
          message.request = GetPowerPlantState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetPowerPlantState_Response.decode(
            reader,
            reader.uint32()
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
        ? GetPowerPlantState_Request.fromJSON(object.request)
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
        ? GetPowerPlantState_Request.toJSON(message.request)
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
    object: I
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
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromPartial(object.error)
        : undefined;
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
  return { request: undefined, response: undefined, error: undefined };
}

export const SetPowerPlantState = {
  encode(
    message: SetPowerPlantState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      SetPowerPlantState_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      SetPowerPlantState_Response.encode(
        message.response,
        writer.uint32(18).fork()
      ).ldelim();
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
            reader.uint32()
          );
          break;
        case 2:
          message.response = SetPowerPlantState_Response.decode(
            reader,
            reader.uint32()
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

  fromJSON(object: any): SetPowerPlantState {
    return {
      request: isSet(object.request)
        ? SetPowerPlantState_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? SetPowerPlantState_Response.fromJSON(object.response)
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
        ? SetPowerPlantState_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetPowerPlantState>, I>>(
    object: I
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
