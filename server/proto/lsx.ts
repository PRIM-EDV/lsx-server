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
} from './lsx.power';
import {
  GetLockdownState_Request,
  SetLockdownState_Request,
  GetAutoLockdown_Request,
  SetAutoLockdown_Request,
  GetLockdownAnnouncements_Request,
  SetLockdownAnnouncements_Request,
  GetLockdownState_Response,
  SetLockdownState_Response,
  GetAutoLockdown_Response,
  SetAutoLockdown_Response,
  GetLockdownAnnouncements_Response,
  SetLockdownAnnouncements_Response,
} from './lsx.lockdown';
import {
  GetFluffFiles_Request,
  GetFluffState_Request,
  SetFluffState_Request,
  GetFluffFiles_Response,
  GetFluffState_Response,
  SetFluffState_Response,
} from './lsx.fluff';
import {
  GetModeSilentState_Request,
  SetModeSilentState_Request,
  GetModeSilentState_Response,
  SetModeSilentState_Response,
} from './lsx.drone';
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = '';

export interface Request {
  getPowerPlantState?: GetPowerPlantState_Request | undefined;
  setPowerPlantState?: SetPowerPlantState_Request | undefined;
  getPowerGridState?: GetPowerGridState_Request | undefined;
  setPowerGridState?: SetPowerGridState_Request | undefined;
  getAnnouncementFiles?: GetAnnouncementFiles_Request | undefined;
  getLockdownState?: GetLockdownState_Request | undefined;
  setLockdownState?: SetLockdownState_Request | undefined;
  getAutoLockdown?: GetAutoLockdown_Request | undefined;
  setAutoLockdown?: SetAutoLockdown_Request | undefined;
  getLockdownAnnouncements?: GetLockdownAnnouncements_Request | undefined;
  setLockdownAnnouncements?: SetLockdownAnnouncements_Request | undefined;
  getFluffFiles?: GetFluffFiles_Request | undefined;
  getFluffState?: GetFluffState_Request | undefined;
  setFluffState?: SetFluffState_Request | undefined;
  playAnnouncement?: PlayAnnouncement_Request | undefined;
  getModeSilentState?: GetModeSilentState_Request | undefined;
  setModeSilentState?: SetModeSilentState_Request | undefined;
}

export interface Response {
  getPowerPlantState?: GetPowerPlantState_Response | undefined;
  setPowerPlantState?: SetPowerPlantState_Response | undefined;
  getPowerGridState?: GetPowerGridState_Response | undefined;
  setPowerGridState?: SetPowerGridState_Response | undefined;
  getAnnouncementFiles?: GetAnnouncementFiles_Response | undefined;
  getLockdownState?: GetLockdownState_Response | undefined;
  setLockdownState?: SetLockdownState_Response | undefined;
  getAutoLockdown?: GetAutoLockdown_Response | undefined;
  setAutoLockdown?: SetAutoLockdown_Response | undefined;
  getLockdownAnnouncements?: GetLockdownAnnouncements_Response | undefined;
  setLockdownAnnouncements?: SetLockdownAnnouncements_Response | undefined;
  getFluffFiles?: GetFluffFiles_Response | undefined;
  getFluffState?: GetFluffState_Response | undefined;
  setFluffState?: SetFluffState_Response | undefined;
  playAnnouncement?: PlayAnnouncement_Response | undefined;
  getModeSilentState?: GetModeSilentState_Response | undefined;
  setModeSilentState?: SetModeSilentState_Response | undefined;
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

export interface PlayAnnouncement {
  request?: PlayAnnouncement_Request | undefined;
  response?: PlayAnnouncement_Response | undefined;
  error: string | undefined;
}

export interface PlayAnnouncement_Request {
  filepath: string;
}

export interface PlayAnnouncement_Response {}

function createBaseRequest(): Request {
  return {
    getPowerPlantState: undefined,
    setPowerPlantState: undefined,
    getPowerGridState: undefined,
    setPowerGridState: undefined,
    getAnnouncementFiles: undefined,
    getLockdownState: undefined,
    setLockdownState: undefined,
    getAutoLockdown: undefined,
    setAutoLockdown: undefined,
    getLockdownAnnouncements: undefined,
    setLockdownAnnouncements: undefined,
    getFluffFiles: undefined,
    getFluffState: undefined,
    setFluffState: undefined,
    playAnnouncement: undefined,
    getModeSilentState: undefined,
    setModeSilentState: undefined,
  };
}

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getPowerPlantState !== undefined) {
      GetPowerPlantState_Request.encode(
        message.getPowerPlantState,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.setPowerPlantState !== undefined) {
      SetPowerPlantState_Request.encode(
        message.setPowerPlantState,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getPowerGridState !== undefined) {
      GetPowerGridState_Request.encode(
        message.getPowerGridState,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.setPowerGridState !== undefined) {
      SetPowerGridState_Request.encode(
        message.setPowerGridState,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.getAnnouncementFiles !== undefined) {
      GetAnnouncementFiles_Request.encode(
        message.getAnnouncementFiles,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getLockdownState !== undefined) {
      GetLockdownState_Request.encode(
        message.getLockdownState,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.setLockdownState !== undefined) {
      SetLockdownState_Request.encode(
        message.setLockdownState,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.getAutoLockdown !== undefined) {
      GetAutoLockdown_Request.encode(
        message.getAutoLockdown,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.setAutoLockdown !== undefined) {
      SetAutoLockdown_Request.encode(
        message.setAutoLockdown,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.getLockdownAnnouncements !== undefined) {
      GetLockdownAnnouncements_Request.encode(
        message.getLockdownAnnouncements,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.setLockdownAnnouncements !== undefined) {
      SetLockdownAnnouncements_Request.encode(
        message.setLockdownAnnouncements,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.getFluffFiles !== undefined) {
      GetFluffFiles_Request.encode(
        message.getFluffFiles,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.getFluffState !== undefined) {
      GetFluffState_Request.encode(
        message.getFluffState,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.setFluffState !== undefined) {
      SetFluffState_Request.encode(
        message.setFluffState,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.playAnnouncement !== undefined) {
      PlayAnnouncement_Request.encode(
        message.playAnnouncement,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.getModeSilentState !== undefined) {
      GetModeSilentState_Request.encode(
        message.getModeSilentState,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.setModeSilentState !== undefined) {
      SetModeSilentState_Request.encode(
        message.setModeSilentState,
        writer.uint32(138).fork(),
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
        case 1:
          message.getPowerPlantState = GetPowerPlantState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.setPowerPlantState = SetPowerPlantState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.getPowerGridState = GetPowerGridState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.setPowerGridState = SetPowerGridState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.getAnnouncementFiles = GetAnnouncementFiles_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.getLockdownState = GetLockdownState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 7:
          message.setLockdownState = SetLockdownState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 8:
          message.getAutoLockdown = GetAutoLockdown_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 9:
          message.setAutoLockdown = SetAutoLockdown_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 10:
          message.getLockdownAnnouncements =
            GetLockdownAnnouncements_Request.decode(reader, reader.uint32());
          break;
        case 11:
          message.setLockdownAnnouncements =
            SetLockdownAnnouncements_Request.decode(reader, reader.uint32());
          break;
        case 12:
          message.getFluffFiles = GetFluffFiles_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 13:
          message.getFluffState = GetFluffState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 14:
          message.setFluffState = SetFluffState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 15:
          message.playAnnouncement = PlayAnnouncement_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 16:
          message.getModeSilentState = GetModeSilentState_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 17:
          message.setModeSilentState = SetModeSilentState_Request.decode(
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
      getLockdownState: isSet(object.getLockdownState)
        ? GetLockdownState_Request.fromJSON(object.getLockdownState)
        : undefined,
      setLockdownState: isSet(object.setLockdownState)
        ? SetLockdownState_Request.fromJSON(object.setLockdownState)
        : undefined,
      getAutoLockdown: isSet(object.getAutoLockdown)
        ? GetAutoLockdown_Request.fromJSON(object.getAutoLockdown)
        : undefined,
      setAutoLockdown: isSet(object.setAutoLockdown)
        ? SetAutoLockdown_Request.fromJSON(object.setAutoLockdown)
        : undefined,
      getLockdownAnnouncements: isSet(object.getLockdownAnnouncements)
        ? GetLockdownAnnouncements_Request.fromJSON(
            object.getLockdownAnnouncements,
          )
        : undefined,
      setLockdownAnnouncements: isSet(object.setLockdownAnnouncements)
        ? SetLockdownAnnouncements_Request.fromJSON(
            object.setLockdownAnnouncements,
          )
        : undefined,
      getFluffFiles: isSet(object.getFluffFiles)
        ? GetFluffFiles_Request.fromJSON(object.getFluffFiles)
        : undefined,
      getFluffState: isSet(object.getFluffState)
        ? GetFluffState_Request.fromJSON(object.getFluffState)
        : undefined,
      setFluffState: isSet(object.setFluffState)
        ? SetFluffState_Request.fromJSON(object.setFluffState)
        : undefined,
      playAnnouncement: isSet(object.playAnnouncement)
        ? PlayAnnouncement_Request.fromJSON(object.playAnnouncement)
        : undefined,
      getModeSilentState: isSet(object.getModeSilentState)
        ? GetModeSilentState_Request.fromJSON(object.getModeSilentState)
        : undefined,
      setModeSilentState: isSet(object.setModeSilentState)
        ? SetModeSilentState_Request.fromJSON(object.setModeSilentState)
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
    message.getLockdownState !== undefined &&
      (obj.getLockdownState = message.getLockdownState
        ? GetLockdownState_Request.toJSON(message.getLockdownState)
        : undefined);
    message.setLockdownState !== undefined &&
      (obj.setLockdownState = message.setLockdownState
        ? SetLockdownState_Request.toJSON(message.setLockdownState)
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
            message.getLockdownAnnouncements,
          )
        : undefined);
    message.setLockdownAnnouncements !== undefined &&
      (obj.setLockdownAnnouncements = message.setLockdownAnnouncements
        ? SetLockdownAnnouncements_Request.toJSON(
            message.setLockdownAnnouncements,
          )
        : undefined);
    message.getFluffFiles !== undefined &&
      (obj.getFluffFiles = message.getFluffFiles
        ? GetFluffFiles_Request.toJSON(message.getFluffFiles)
        : undefined);
    message.getFluffState !== undefined &&
      (obj.getFluffState = message.getFluffState
        ? GetFluffState_Request.toJSON(message.getFluffState)
        : undefined);
    message.setFluffState !== undefined &&
      (obj.setFluffState = message.setFluffState
        ? SetFluffState_Request.toJSON(message.setFluffState)
        : undefined);
    message.playAnnouncement !== undefined &&
      (obj.playAnnouncement = message.playAnnouncement
        ? PlayAnnouncement_Request.toJSON(message.playAnnouncement)
        : undefined);
    message.getModeSilentState !== undefined &&
      (obj.getModeSilentState = message.getModeSilentState
        ? GetModeSilentState_Request.toJSON(message.getModeSilentState)
        : undefined);
    message.setModeSilentState !== undefined &&
      (obj.setModeSilentState = message.setModeSilentState
        ? SetModeSilentState_Request.toJSON(message.setModeSilentState)
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
    message.getLockdownState =
      object.getLockdownState !== undefined && object.getLockdownState !== null
        ? GetLockdownState_Request.fromPartial(object.getLockdownState)
        : undefined;
    message.setLockdownState =
      object.setLockdownState !== undefined && object.setLockdownState !== null
        ? SetLockdownState_Request.fromPartial(object.setLockdownState)
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
            object.getLockdownAnnouncements,
          )
        : undefined;
    message.setLockdownAnnouncements =
      object.setLockdownAnnouncements !== undefined &&
      object.setLockdownAnnouncements !== null
        ? SetLockdownAnnouncements_Request.fromPartial(
            object.setLockdownAnnouncements,
          )
        : undefined;
    message.getFluffFiles =
      object.getFluffFiles !== undefined && object.getFluffFiles !== null
        ? GetFluffFiles_Request.fromPartial(object.getFluffFiles)
        : undefined;
    message.getFluffState =
      object.getFluffState !== undefined && object.getFluffState !== null
        ? GetFluffState_Request.fromPartial(object.getFluffState)
        : undefined;
    message.setFluffState =
      object.setFluffState !== undefined && object.setFluffState !== null
        ? SetFluffState_Request.fromPartial(object.setFluffState)
        : undefined;
    message.playAnnouncement =
      object.playAnnouncement !== undefined && object.playAnnouncement !== null
        ? PlayAnnouncement_Request.fromPartial(object.playAnnouncement)
        : undefined;
    message.getModeSilentState =
      object.getModeSilentState !== undefined &&
      object.getModeSilentState !== null
        ? GetModeSilentState_Request.fromPartial(object.getModeSilentState)
        : undefined;
    message.setModeSilentState =
      object.setModeSilentState !== undefined &&
      object.setModeSilentState !== null
        ? SetModeSilentState_Request.fromPartial(object.setModeSilentState)
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
    getLockdownState: undefined,
    setLockdownState: undefined,
    getAutoLockdown: undefined,
    setAutoLockdown: undefined,
    getLockdownAnnouncements: undefined,
    setLockdownAnnouncements: undefined,
    getFluffFiles: undefined,
    getFluffState: undefined,
    setFluffState: undefined,
    playAnnouncement: undefined,
    getModeSilentState: undefined,
    setModeSilentState: undefined,
  };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.getPowerPlantState !== undefined) {
      GetPowerPlantState_Response.encode(
        message.getPowerPlantState,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.setPowerPlantState !== undefined) {
      SetPowerPlantState_Response.encode(
        message.setPowerPlantState,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.getPowerGridState !== undefined) {
      GetPowerGridState_Response.encode(
        message.getPowerGridState,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.setPowerGridState !== undefined) {
      SetPowerGridState_Response.encode(
        message.setPowerGridState,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.getAnnouncementFiles !== undefined) {
      GetAnnouncementFiles_Response.encode(
        message.getAnnouncementFiles,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.getLockdownState !== undefined) {
      GetLockdownState_Response.encode(
        message.getLockdownState,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.setLockdownState !== undefined) {
      SetLockdownState_Response.encode(
        message.setLockdownState,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.getAutoLockdown !== undefined) {
      GetAutoLockdown_Response.encode(
        message.getAutoLockdown,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.setAutoLockdown !== undefined) {
      SetAutoLockdown_Response.encode(
        message.setAutoLockdown,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.getLockdownAnnouncements !== undefined) {
      GetLockdownAnnouncements_Response.encode(
        message.getLockdownAnnouncements,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.setLockdownAnnouncements !== undefined) {
      SetLockdownAnnouncements_Response.encode(
        message.setLockdownAnnouncements,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.getFluffFiles !== undefined) {
      GetFluffFiles_Response.encode(
        message.getFluffFiles,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.getFluffState !== undefined) {
      GetFluffState_Response.encode(
        message.getFluffState,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.setFluffState !== undefined) {
      SetFluffState_Response.encode(
        message.setFluffState,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.playAnnouncement !== undefined) {
      PlayAnnouncement_Response.encode(
        message.playAnnouncement,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.getModeSilentState !== undefined) {
      GetModeSilentState_Response.encode(
        message.getModeSilentState,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.setModeSilentState !== undefined) {
      SetModeSilentState_Response.encode(
        message.setModeSilentState,
        writer.uint32(138).fork(),
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
            reader.uint32(),
          );
          break;
        case 2:
          message.setPowerPlantState = SetPowerPlantState_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.getPowerGridState = GetPowerGridState_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.setPowerGridState = SetPowerGridState_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.getAnnouncementFiles = GetAnnouncementFiles_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.getLockdownState = GetLockdownState_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 7:
          message.setLockdownState = SetLockdownState_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 8:
          message.getAutoLockdown = GetAutoLockdown_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 9:
          message.setAutoLockdown = SetAutoLockdown_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 10:
          message.getLockdownAnnouncements =
            GetLockdownAnnouncements_Response.decode(reader, reader.uint32());
          break;
        case 11:
          message.setLockdownAnnouncements =
            SetLockdownAnnouncements_Response.decode(reader, reader.uint32());
          break;
        case 12:
          message.getFluffFiles = GetFluffFiles_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 13:
          message.getFluffState = GetFluffState_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 14:
          message.setFluffState = SetFluffState_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 15:
          message.playAnnouncement = PlayAnnouncement_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 16:
          message.getModeSilentState = GetModeSilentState_Response.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 17:
          message.setModeSilentState = SetModeSilentState_Response.decode(
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
      getLockdownState: isSet(object.getLockdownState)
        ? GetLockdownState_Response.fromJSON(object.getLockdownState)
        : undefined,
      setLockdownState: isSet(object.setLockdownState)
        ? SetLockdownState_Response.fromJSON(object.setLockdownState)
        : undefined,
      getAutoLockdown: isSet(object.getAutoLockdown)
        ? GetAutoLockdown_Response.fromJSON(object.getAutoLockdown)
        : undefined,
      setAutoLockdown: isSet(object.setAutoLockdown)
        ? SetAutoLockdown_Response.fromJSON(object.setAutoLockdown)
        : undefined,
      getLockdownAnnouncements: isSet(object.getLockdownAnnouncements)
        ? GetLockdownAnnouncements_Response.fromJSON(
            object.getLockdownAnnouncements,
          )
        : undefined,
      setLockdownAnnouncements: isSet(object.setLockdownAnnouncements)
        ? SetLockdownAnnouncements_Response.fromJSON(
            object.setLockdownAnnouncements,
          )
        : undefined,
      getFluffFiles: isSet(object.getFluffFiles)
        ? GetFluffFiles_Response.fromJSON(object.getFluffFiles)
        : undefined,
      getFluffState: isSet(object.getFluffState)
        ? GetFluffState_Response.fromJSON(object.getFluffState)
        : undefined,
      setFluffState: isSet(object.setFluffState)
        ? SetFluffState_Response.fromJSON(object.setFluffState)
        : undefined,
      playAnnouncement: isSet(object.playAnnouncement)
        ? PlayAnnouncement_Response.fromJSON(object.playAnnouncement)
        : undefined,
      getModeSilentState: isSet(object.getModeSilentState)
        ? GetModeSilentState_Response.fromJSON(object.getModeSilentState)
        : undefined,
      setModeSilentState: isSet(object.setModeSilentState)
        ? SetModeSilentState_Response.fromJSON(object.setModeSilentState)
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
    message.getLockdownState !== undefined &&
      (obj.getLockdownState = message.getLockdownState
        ? GetLockdownState_Response.toJSON(message.getLockdownState)
        : undefined);
    message.setLockdownState !== undefined &&
      (obj.setLockdownState = message.setLockdownState
        ? SetLockdownState_Response.toJSON(message.setLockdownState)
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
            message.getLockdownAnnouncements,
          )
        : undefined);
    message.setLockdownAnnouncements !== undefined &&
      (obj.setLockdownAnnouncements = message.setLockdownAnnouncements
        ? SetLockdownAnnouncements_Response.toJSON(
            message.setLockdownAnnouncements,
          )
        : undefined);
    message.getFluffFiles !== undefined &&
      (obj.getFluffFiles = message.getFluffFiles
        ? GetFluffFiles_Response.toJSON(message.getFluffFiles)
        : undefined);
    message.getFluffState !== undefined &&
      (obj.getFluffState = message.getFluffState
        ? GetFluffState_Response.toJSON(message.getFluffState)
        : undefined);
    message.setFluffState !== undefined &&
      (obj.setFluffState = message.setFluffState
        ? SetFluffState_Response.toJSON(message.setFluffState)
        : undefined);
    message.playAnnouncement !== undefined &&
      (obj.playAnnouncement = message.playAnnouncement
        ? PlayAnnouncement_Response.toJSON(message.playAnnouncement)
        : undefined);
    message.getModeSilentState !== undefined &&
      (obj.getModeSilentState = message.getModeSilentState
        ? GetModeSilentState_Response.toJSON(message.getModeSilentState)
        : undefined);
    message.setModeSilentState !== undefined &&
      (obj.setModeSilentState = message.setModeSilentState
        ? SetModeSilentState_Response.toJSON(message.setModeSilentState)
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
    message.getLockdownState =
      object.getLockdownState !== undefined && object.getLockdownState !== null
        ? GetLockdownState_Response.fromPartial(object.getLockdownState)
        : undefined;
    message.setLockdownState =
      object.setLockdownState !== undefined && object.setLockdownState !== null
        ? SetLockdownState_Response.fromPartial(object.setLockdownState)
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
            object.getLockdownAnnouncements,
          )
        : undefined;
    message.setLockdownAnnouncements =
      object.setLockdownAnnouncements !== undefined &&
      object.setLockdownAnnouncements !== null
        ? SetLockdownAnnouncements_Response.fromPartial(
            object.setLockdownAnnouncements,
          )
        : undefined;
    message.getFluffFiles =
      object.getFluffFiles !== undefined && object.getFluffFiles !== null
        ? GetFluffFiles_Response.fromPartial(object.getFluffFiles)
        : undefined;
    message.getFluffState =
      object.getFluffState !== undefined && object.getFluffState !== null
        ? GetFluffState_Response.fromPartial(object.getFluffState)
        : undefined;
    message.setFluffState =
      object.setFluffState !== undefined && object.setFluffState !== null
        ? SetFluffState_Response.fromPartial(object.setFluffState)
        : undefined;
    message.playAnnouncement =
      object.playAnnouncement !== undefined && object.playAnnouncement !== null
        ? PlayAnnouncement_Response.fromPartial(object.playAnnouncement)
        : undefined;
    message.getModeSilentState =
      object.getModeSilentState !== undefined &&
      object.getModeSilentState !== null
        ? GetModeSilentState_Response.fromPartial(object.getModeSilentState)
        : undefined;
    message.setModeSilentState =
      object.setModeSilentState !== undefined &&
      object.setModeSilentState !== null
        ? SetModeSilentState_Response.fromPartial(object.setModeSilentState)
        : undefined;
    return message;
  },
};

function createBaseLsxMessage(): LsxMessage {
  return { id: '', request: undefined, response: undefined };
}

export const LsxMessage = {
  encode(
    message: LsxMessage,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
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
      id: isSet(object.id) ? String(object.id) : '',
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
    object: I,
  ): LsxMessage {
    const message = createBaseLsxMessage();
    message.id = object.id ?? '';
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
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.request !== undefined) {
      GetAnnouncementFiles_Request.encode(
        message.request,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.response !== undefined) {
      GetAnnouncementFiles_Response.encode(
        message.response,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
            reader.uint32(),
          );
          break;
        case 2:
          message.response = GetAnnouncementFiles_Response.decode(
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
    object: I,
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
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.files) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    object: I,
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
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
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
    _: I,
  ): GetAnnouncementFiles_Request {
    const message = createBaseGetAnnouncementFiles_Request();
    return message;
  },
};

function createBasePlayAnnouncement(): PlayAnnouncement {
  return { request: undefined, response: undefined, error: undefined };
}

export const PlayAnnouncement = {
  encode(
    message: PlayAnnouncement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.request !== undefined) {
      PlayAnnouncement_Request.encode(
        message.request,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.response !== undefined) {
      PlayAnnouncement_Response.encode(
        message.response,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.error !== undefined) {
      writer.uint32(26).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayAnnouncement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayAnnouncement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = PlayAnnouncement_Request.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.response = PlayAnnouncement_Response.decode(
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

  fromJSON(object: any): PlayAnnouncement {
    return {
      request: isSet(object.request)
        ? PlayAnnouncement_Request.fromJSON(object.request)
        : undefined,
      response: isSet(object.response)
        ? PlayAnnouncement_Response.fromJSON(object.response)
        : undefined,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: PlayAnnouncement): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request
        ? PlayAnnouncement_Request.toJSON(message.request)
        : undefined);
    message.response !== undefined &&
      (obj.response = message.response
        ? PlayAnnouncement_Response.toJSON(message.response)
        : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayAnnouncement>, I>>(
    object: I,
  ): PlayAnnouncement {
    const message = createBasePlayAnnouncement();
    message.request =
      object.request !== undefined && object.request !== null
        ? PlayAnnouncement_Request.fromPartial(object.request)
        : undefined;
    message.response =
      object.response !== undefined && object.response !== null
        ? PlayAnnouncement_Response.fromPartial(object.response)
        : undefined;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBasePlayAnnouncement_Request(): PlayAnnouncement_Request {
  return { filepath: '' };
}

export const PlayAnnouncement_Request = {
  encode(
    message: PlayAnnouncement_Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filepath !== '') {
      writer.uint32(10).string(message.filepath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlayAnnouncement_Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayAnnouncement_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filepath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayAnnouncement_Request {
    return {
      filepath: isSet(object.filepath) ? String(object.filepath) : '',
    };
  },

  toJSON(message: PlayAnnouncement_Request): unknown {
    const obj: any = {};
    message.filepath !== undefined && (obj.filepath = message.filepath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayAnnouncement_Request>, I>>(
    object: I,
  ): PlayAnnouncement_Request {
    const message = createBasePlayAnnouncement_Request();
    message.filepath = object.filepath ?? '';
    return message;
  },
};

function createBasePlayAnnouncement_Response(): PlayAnnouncement_Response {
  return {};
}

export const PlayAnnouncement_Response = {
  encode(
    _: PlayAnnouncement_Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): PlayAnnouncement_Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayAnnouncement_Response();
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

  fromJSON(_: any): PlayAnnouncement_Response {
    return {};
  },

  toJSON(_: PlayAnnouncement_Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayAnnouncement_Response>, I>>(
    _: I,
  ): PlayAnnouncement_Response {
    const message = createBasePlayAnnouncement_Response();
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
