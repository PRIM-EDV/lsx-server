/* eslint-disable */
import {
  GetPowerPlantState_Request,
  SetPowerPlantState_Request,
  GetPowerGridState_Request,
  SetPowerGridState_Request,
  GetPowerPlantState_Response,
  SetPowerPlantState_Response,
  GetPowerGridState_Response,
  SetPowerGridState_Response,
} from "./lsx.power";
import {
  GetBaseState_Request,
  SetBaseState_Request,
  GetAutoLockdown_Request,
  SetAutoLockdown_Request,
  GetLockdownAnnouncements_Request,
  SetLockdownAnnouncements_Request,
  GetBaseState_Response,
  SetBaseState_Response,
  GetAutoLockdown_Response,
  SetAutoLockdown_Response,
  GetLockdownAnnouncements_Response,
  SetLockdownAnnouncements_Response,
} from "./lsx.lockdown";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Request {
  getPowerPlantState?: GetPowerPlantState_Request | undefined;
  setPowerPlantState?: SetPowerPlantState_Request | undefined;
  getPowerGridState?: GetPowerGridState_Request | undefined;
  setPowerGridState?: SetPowerGridState_Request | undefined;
  getAnnouncementFiles?: GetAnnouncementFiles_Request | undefined;
  getBaseState?: GetBaseState_Request | undefined;
  setBaseState?: SetBaseState_Request | undefined;
  getAutoLockdown?: GetAutoLockdown_Request | undefined;
  setAutoLockdown?: SetAutoLockdown_Request | undefined;
  getLockdownAnnouncements?: GetLockdownAnnouncements_Request | undefined;
  setLockdownAnnouncements?: SetLockdownAnnouncements_Request | undefined;
  getFluffFiles?: GetFluffFiles_Request | undefined;
}

export interface Response {
  getPowerPlantState?: GetPowerPlantState_Response | undefined;
  setPowerPlantState?: SetPowerPlantState_Response | undefined;
  getPowerGridState?: GetPowerGridState_Response | undefined;
  setPowerGridState?: SetPowerGridState_Response | undefined;
  getAnnouncementFiles?: GetAnnouncementFiles_Response | undefined;
  getBaseState?: GetBaseState_Response | undefined;
  setBaseState?: SetBaseState_Response | undefined;
  getAutoLockdown?: GetAutoLockdown_Response | undefined;
  setAutoLockdown?: SetAutoLockdown_Response | undefined;
  getLockdownAnnouncements?: GetLockdownAnnouncements_Response | undefined;
  setLockdownAnnouncements?: SetLockdownAnnouncements_Response | undefined;
  getFluffFiles?: GetFluffFiles_Response | undefined;
}

export interface LsxMessage {
  id: string;
  request?: Request | undefined;
  response?: Response | undefined;
}

export interface GetAnnouncementFiles {
  request?: GetAnnouncementFiles_Request | undefined;
  response?: GetAnnouncementFiles_Response | undefined;
  error: string | undefined;
}

export interface GetAnnouncementFiles_Response {
  files: string[];
}

export interface GetAnnouncementFiles_Request {}

export interface GetFluffFiles {
  request?: GetFluffFiles_Request | undefined;
  response?: GetFluffFiles_Response | undefined;
  error: string | undefined;
}

export interface GetFluffFiles_Response {
  files: string[];
}

export interface GetFluffFiles_Request {}

function createBaseRequest(): Request {
  return {
    getPowerPlantState: undefined,
    setPowerPlantState: undefined,
    getPowerGridState: undefined,
    setPowerGridState: undefined,
    getAnnouncementFiles: undefined,
    getBaseState: undefined,
    setBaseState: undefined,
    getAutoLockdown: undefined,
    setAutoLockdown: undefined,
    getLockdownAnnouncements: undefined,
    setLockdownAnnouncements: undefined,
    getFluffFiles: undefined,
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
    if (message.getAnnouncementFiles !== undefined) {
      GetAnnouncementFiles_Request.encode(
        message.getAnnouncementFiles,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.getBaseState !== undefined) {
      GetBaseState_Request.encode(
        message.getBaseState,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.setBaseState !== undefined) {
      SetBaseState_Request.encode(
        message.setBaseState,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.getAutoLockdown !== undefined) {
      GetAutoLockdown_Request.encode(
        message.getAutoLockdown,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.setAutoLockdown !== undefined) {
      SetAutoLockdown_Request.encode(
        message.setAutoLockdown,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.getLockdownAnnouncements !== undefined) {
      GetLockdownAnnouncements_Request.encode(
        message.getLockdownAnnouncements,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.setLockdownAnnouncements !== undefined) {
      SetLockdownAnnouncements_Request.encode(
        message.setLockdownAnnouncements,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.getFluffFiles !== undefined) {
      GetFluffFiles_Request.encode(
        message.getFluffFiles,
        writer.uint32(106).fork()
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
        case 6:
          message.getAnnouncementFiles = GetAnnouncementFiles_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.getBaseState = GetBaseState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.setBaseState = SetBaseState_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.getAutoLockdown = GetAutoLockdown_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.setAutoLockdown = SetAutoLockdown_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.getLockdownAnnouncements =
            GetLockdownAnnouncements_Request.decode(reader, reader.uint32());
          break;
        case 12:
          message.setLockdownAnnouncements =
            SetLockdownAnnouncements_Request.decode(reader, reader.uint32());
          break;
        case 13:
          message.getFluffFiles = GetFluffFiles_Request.decode(
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
      getAnnouncementFiles: isSet(object.getAnnouncementFiles)
        ? GetAnnouncementFiles_Request.fromJSON(object.getAnnouncementFiles)
        : undefined,
      getBaseState: isSet(object.getBaseState)
        ? GetBaseState_Request.fromJSON(object.getBaseState)
        : undefined,
      setBaseState: isSet(object.setBaseState)
        ? SetBaseState_Request.fromJSON(object.setBaseState)
        : undefined,
      getAutoLockdown: isSet(object.getAutoLockdown)
        ? GetAutoLockdown_Request.fromJSON(object.getAutoLockdown)
        : undefined,
      setAutoLockdown: isSet(object.setAutoLockdown)
        ? SetAutoLockdown_Request.fromJSON(object.setAutoLockdown)
        : undefined,
      getLockdownAnnouncements: isSet(object.getLockdownAnnouncements)
        ? GetLockdownAnnouncements_Request.fromJSON(
            object.getLockdownAnnouncements
          )
        : undefined,
      setLockdownAnnouncements: isSet(object.setLockdownAnnouncements)
        ? SetLockdownAnnouncements_Request.fromJSON(
            object.setLockdownAnnouncements
          )
        : undefined,
      getFluffFiles: isSet(object.getFluffFiles)
        ? GetFluffFiles_Request.fromJSON(object.getFluffFiles)
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
    message.getAnnouncementFiles !== undefined &&
      (obj.getAnnouncementFiles = message.getAnnouncementFiles
        ? GetAnnouncementFiles_Request.toJSON(message.getAnnouncementFiles)
        : undefined);
    message.getBaseState !== undefined &&
      (obj.getBaseState = message.getBaseState
        ? GetBaseState_Request.toJSON(message.getBaseState)
        : undefined);
    message.setBaseState !== undefined &&
      (obj.setBaseState = message.setBaseState
        ? SetBaseState_Request.toJSON(message.setBaseState)
        : undefined);
    message.getAutoLockdown !== undefined &&
      (obj.getAutoLockdown = message.getAutoLockdown
        ? GetAutoLockdown_Request.toJSON(message.getAutoLockdown)
        : undefined);
    message.setAutoLockdown !== undefined &&
      (obj.setAutoLockdown = message.setAutoLockdown
        ? SetAutoLockdown_Request.toJSON(message.setAutoLockdown)
        : undefined);
    message.getLockdownAnnouncements !== undefined &&
      (obj.getLockdownAnnouncements = message.getLockdownAnnouncements
        ? GetLockdownAnnouncements_Request.toJSON(
            message.getLockdownAnnouncements
          )
        : undefined);
    message.setLockdownAnnouncements !== undefined &&
      (obj.setLockdownAnnouncements = message.setLockdownAnnouncements
        ? SetLockdownAnnouncements_Request.toJSON(
            message.setLockdownAnnouncements
          )
        : undefined);
    message.getFluffFiles !== undefined &&
      (obj.getFluffFiles = message.getFluffFiles
        ? GetFluffFiles_Request.toJSON(message.getFluffFiles)
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
    message.getAnnouncementFiles =
      object.getAnnouncementFiles !== undefined &&
      object.getAnnouncementFiles !== null
        ? GetAnnouncementFiles_Request.fromPartial(object.getAnnouncementFiles)
        : undefined;
    message.getBaseState =
      object.getBaseState !== undefined && object.getBaseState !== null
        ? GetBaseState_Request.fromPartial(object.getBaseState)
        : undefined;
    message.setBaseState =
      object.setBaseState !== undefined && object.setBaseState !== null
        ? SetBaseState_Request.fromPartial(object.setBaseState)
        : undefined;
    message.getAutoLockdown =
      object.getAutoLockdown !== undefined && object.getAutoLockdown !== null
        ? GetAutoLockdown_Request.fromPartial(object.getAutoLockdown)
        : undefined;
    message.setAutoLockdown =
      object.setAutoLockdown !== undefined && object.setAutoLockdown !== null
        ? SetAutoLockdown_Request.fromPartial(object.setAutoLockdown)
        : undefined;
    message.getLockdownAnnouncements =
      object.getLockdownAnnouncements !== undefined &&
      object.getLockdownAnnouncements !== null
        ? GetLockdownAnnouncements_Request.fromPartial(
            object.getLockdownAnnouncements
          )
        : undefined;
    message.setLockdownAnnouncements =
      object.setLockdownAnnouncements !== undefined &&
      object.setLockdownAnnouncements !== null
        ? SetLockdownAnnouncements_Request.fromPartial(
            object.setLockdownAnnouncements
          )
        : undefined;
    message.getFluffFiles =
      object.getFluffFiles !== undefined && object.getFluffFiles !== null
        ? GetFluffFiles_Request.fromPartial(object.getFluffFiles)
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
    getAnnouncementFiles: undefined,
    getBaseState: undefined,
    setBaseState: undefined,
    getAutoLockdown: undefined,
    setAutoLockdown: undefined,
    getLockdownAnnouncements: undefined,
    setLockdownAnnouncements: undefined,
    getFluffFiles: undefined,
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
    if (message.getAnnouncementFiles !== undefined) {
      GetAnnouncementFiles_Response.encode(
        message.getAnnouncementFiles,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.getBaseState !== undefined) {
      GetBaseState_Response.encode(
        message.getBaseState,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.setBaseState !== undefined) {
      SetBaseState_Response.encode(
        message.setBaseState,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.getAutoLockdown !== undefined) {
      GetAutoLockdown_Response.encode(
        message.getAutoLockdown,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.setAutoLockdown !== undefined) {
      SetAutoLockdown_Response.encode(
        message.setAutoLockdown,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.getLockdownAnnouncements !== undefined) {
      GetLockdownAnnouncements_Response.encode(
        message.getLockdownAnnouncements,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.setLockdownAnnouncements !== undefined) {
      SetLockdownAnnouncements_Response.encode(
        message.setLockdownAnnouncements,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.getFluffFiles !== undefined) {
      GetFluffFiles_Response.encode(
        message.getFluffFiles,
        writer.uint32(106).fork()
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
        case 6:
          message.getAnnouncementFiles = GetAnnouncementFiles_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.getBaseState = GetBaseState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.setBaseState = SetBaseState_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.getAutoLockdown = GetAutoLockdown_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.setAutoLockdown = SetAutoLockdown_Response.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.getLockdownAnnouncements =
            GetLockdownAnnouncements_Response.decode(reader, reader.uint32());
          break;
        case 12:
          message.setLockdownAnnouncements =
            SetLockdownAnnouncements_Response.decode(reader, reader.uint32());
          break;
        case 13:
          message.getFluffFiles = GetFluffFiles_Response.decode(
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
      getAnnouncementFiles: isSet(object.getAnnouncementFiles)
        ? GetAnnouncementFiles_Response.fromJSON(object.getAnnouncementFiles)
        : undefined,
      getBaseState: isSet(object.getBaseState)
        ? GetBaseState_Response.fromJSON(object.getBaseState)
        : undefined,
      setBaseState: isSet(object.setBaseState)
        ? SetBaseState_Response.fromJSON(object.setBaseState)
        : undefined,
      getAutoLockdown: isSet(object.getAutoLockdown)
        ? GetAutoLockdown_Response.fromJSON(object.getAutoLockdown)
        : undefined,
      setAutoLockdown: isSet(object.setAutoLockdown)
        ? SetAutoLockdown_Response.fromJSON(object.setAutoLockdown)
        : undefined,
      getLockdownAnnouncements: isSet(object.getLockdownAnnouncements)
        ? GetLockdownAnnouncements_Response.fromJSON(
            object.getLockdownAnnouncements
          )
        : undefined,
      setLockdownAnnouncements: isSet(object.setLockdownAnnouncements)
        ? SetLockdownAnnouncements_Response.fromJSON(
            object.setLockdownAnnouncements
          )
        : undefined,
      getFluffFiles: isSet(object.getFluffFiles)
        ? GetFluffFiles_Response.fromJSON(object.getFluffFiles)
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
    message.getAnnouncementFiles !== undefined &&
      (obj.getAnnouncementFiles = message.getAnnouncementFiles
        ? GetAnnouncementFiles_Response.toJSON(message.getAnnouncementFiles)
        : undefined);
    message.getBaseState !== undefined &&
      (obj.getBaseState = message.getBaseState
        ? GetBaseState_Response.toJSON(message.getBaseState)
        : undefined);
    message.setBaseState !== undefined &&
      (obj.setBaseState = message.setBaseState
        ? SetBaseState_Response.toJSON(message.setBaseState)
        : undefined);
    message.getAutoLockdown !== undefined &&
      (obj.getAutoLockdown = message.getAutoLockdown
        ? GetAutoLockdown_Response.toJSON(message.getAutoLockdown)
        : undefined);
    message.setAutoLockdown !== undefined &&
      (obj.setAutoLockdown = message.setAutoLockdown
        ? SetAutoLockdown_Response.toJSON(message.setAutoLockdown)
        : undefined);
    message.getLockdownAnnouncements !== undefined &&
      (obj.getLockdownAnnouncements = message.getLockdownAnnouncements
        ? GetLockdownAnnouncements_Response.toJSON(
            message.getLockdownAnnouncements
          )
        : undefined);
    message.setLockdownAnnouncements !== undefined &&
      (obj.setLockdownAnnouncements = message.setLockdownAnnouncements
        ? SetLockdownAnnouncements_Response.toJSON(
            message.setLockdownAnnouncements
          )
        : undefined);
    message.getFluffFiles !== undefined &&
      (obj.getFluffFiles = message.getFluffFiles
        ? GetFluffFiles_Response.toJSON(message.getFluffFiles)
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
    message.getAnnouncementFiles =
      object.getAnnouncementFiles !== undefined &&
      object.getAnnouncementFiles !== null
        ? GetAnnouncementFiles_Response.fromPartial(object.getAnnouncementFiles)
        : undefined;
    message.getBaseState =
      object.getBaseState !== undefined && object.getBaseState !== null
        ? GetBaseState_Response.fromPartial(object.getBaseState)
        : undefined;
    message.setBaseState =
      object.setBaseState !== undefined && object.setBaseState !== null
        ? SetBaseState_Response.fromPartial(object.setBaseState)
        : undefined;
    message.getAutoLockdown =
      object.getAutoLockdown !== undefined && object.getAutoLockdown !== null
        ? GetAutoLockdown_Response.fromPartial(object.getAutoLockdown)
        : undefined;
    message.setAutoLockdown =
      object.setAutoLockdown !== undefined && object.setAutoLockdown !== null
        ? SetAutoLockdown_Response.fromPartial(object.setAutoLockdown)
        : undefined;
    message.getLockdownAnnouncements =
      object.getLockdownAnnouncements !== undefined &&
      object.getLockdownAnnouncements !== null
        ? GetLockdownAnnouncements_Response.fromPartial(
            object.getLockdownAnnouncements
          )
        : undefined;
    message.setLockdownAnnouncements =
      object.setLockdownAnnouncements !== undefined &&
      object.setLockdownAnnouncements !== null
        ? SetLockdownAnnouncements_Response.fromPartial(
            object.setLockdownAnnouncements
          )
        : undefined;
    message.getFluffFiles =
      object.getFluffFiles !== undefined && object.getFluffFiles !== null
        ? GetFluffFiles_Response.fromPartial(object.getFluffFiles)
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

function createBaseGetAnnouncementFiles(): GetAnnouncementFiles {
  return { request: undefined, response: undefined, error: undefined };
}

export const GetAnnouncementFiles = {
  encode(
    message: GetAnnouncementFiles,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetAnnouncementFiles_Request.encode(
        message.request,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetAnnouncementFiles_Response.encode(
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
  ): GetAnnouncementFiles {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAnnouncementFiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = GetAnnouncementFiles_Request.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.response = GetAnnouncementFiles_Response.decode(
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

  fromJSON(object: any): GetAnnouncementFiles {
    return {
      request: isSet(object.request)
        ? GetAnnouncementFiles_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? GetAnnouncementFiles_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: GetAnnouncementFiles): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? GetAnnouncementFiles_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? GetAnnouncementFiles_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAnnouncementFiles>, I>>(
    object: I
  ): GetAnnouncementFiles {
    const message = createBaseGetAnnouncementFiles();
    message.request =
      object.request !== undefined && object.request !== null
        ? GetAnnouncementFiles_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? GetAnnouncementFiles_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetAnnouncementFiles_Response(): GetAnnouncementFiles_Response {
  return { files: [] };
}

export const GetAnnouncementFiles_Response = {
  encode(
    message: GetAnnouncementFiles_Response,
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
  ): GetAnnouncementFiles_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAnnouncementFiles_Response();
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

  fromJSON(object: any): GetAnnouncementFiles_Response {
    return {
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetAnnouncementFiles_Response): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAnnouncementFiles_Response>, I>>(
    object: I
  ): GetAnnouncementFiles_Response {
    const message = createBaseGetAnnouncementFiles_Response();
    message.files = object.files?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetAnnouncementFiles_Request(): GetAnnouncementFiles_Request {
  return {};
}

export const GetAnnouncementFiles_Request = {
  encode(
    _: GetAnnouncementFiles_Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAnnouncementFiles_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAnnouncementFiles_Request();
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

  fromJSON(_: any): GetAnnouncementFiles_Request {
    return {};
  },

  toJSON(_: GetAnnouncementFiles_Request): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAnnouncementFiles_Request>, I>>(
    _: I
  ): GetAnnouncementFiles_Request {
    const message = createBaseGetAnnouncementFiles_Request();
    return message;
  },
};

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
