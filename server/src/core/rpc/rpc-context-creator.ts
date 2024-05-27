import { ContextType } from "@nestjs/common";
import { Controller } from "@nestjs/common/interfaces";
import { FORBIDDEN_MESSAGE, GuardsConsumer, GuardsContextCreator } from "@nestjs/core/guards";
import { ContextUtils, ParamProperties } from "@nestjs/core/helpers/context-utils";
import { ParamsMetadata } from "@nestjs/core/helpers/interfaces/params-metadata.interface";
import { WsException } from "@nestjs/websockets";

type WsParamProperties = ParamProperties & { metatype?: any };

// const DEFAULT_CALLBACK_METADATA = {
//   [`${WsParamtype.PAYLOAD}:1`]: { index: 1, data: undefined, pipes: [] },
//   [`${WsParamtype.SOCKET}:0`]: { index: 0, data: undefined, pipes: [] },
// };

interface WsHandlerMetadata {
  argsLength: number;
  paramtypes: any[];
  getParamsMetadata: (moduleKey: string) => WsParamProperties[];
}

export class RpcContextCreator {
  private readonly contextUtils = new ContextUtils();
  // private readonly handlerMetadataStorage =
  //   new HandlerMetadataStorage<WsHandlerMetadata>();

  constructor(
    private readonly guardsContextCreator: GuardsContextCreator,
    private readonly guardsConsumer: GuardsConsumer,
  ) { }

  public create<T extends ParamsMetadata = ParamsMetadata>(
    instance: Controller,
    callback: (...args: unknown[]) => void,
    moduleKey: string,
    methodName: string,
  ): (...args: any[]) => Promise<void> {
    const contextType: ContextType = 'rpc';

    // const { argsLength, paramtypes, getParamsMetadata } = this.getMetadata<T>(
    //   instance,
    //   methodName,
    //   contextType,
    // );

    const guards = this.guardsContextCreator.create(
      instance,
      callback,
      moduleKey,
    );

    //   const paramsMetadata = getParamsMetadata(moduleKey);
    //   const paramsOptions = paramsMetadata
    //     ? this.contextUtils.mergeParamsMetatypes(paramsMetadata, paramtypes)
    //     : [];

    const fnCanActivate = this.createGuardsFn(
      guards,
      instance,
      callback,
      contextType,
    );

    const fn = async (...args: unknown[]) => {
      fnCanActivate && (await fnCanActivate(args));
      return callback.apply(instance, args);
    };

    Object.defineProperty(fn, 'name', { value: methodName });
    // const handler = (initialArgs: unknown[], args: unknown[]) => async () => {
    //   return callback.apply(instance, args);
    // };
    //   const targetPattern = this.reflectCallbackPattern(callback);
    return fn;
  }

  public createGuardsFn<TContext extends string = ContextType>(
    guards: any[],
    instance: Controller,
    callback: (...args: unknown[]) => any,
    contextType?: TContext,
  ): Function | null {
    const canActivateFn = async (args: any[]) => {
      const canActivate = await this.guardsConsumer.tryActivate<TContext>(
        guards,
        args,
        instance,
        callback,
        contextType,
      );
      if (!canActivate) {
        throw new WsException(FORBIDDEN_MESSAGE);
      }
    };
    return guards.length ? canActivateFn : null;
  }

  // public getMetadata<TMetadata, TContext extends ContextType = ContextType>(
  //   instance: Controller,
  //   methodName: string,
  //   contextType: TContext,
  // ): WsHandlerMetadata {
  //   // const cacheMetadata = this.handlerMetadataStorage.get(instance, methodName);
  //   // if (cacheMetadata) {
  //   //   return cacheMetadata;
  //   // }
  //   const metadata =
  //     this.contextUtils.reflectCallbackMetadata<TMetadata>(
  //       instance,
  //       methodName,
  //       PARAM_ARGS_METADATA,
  //     );
  //   const keys = Object.keys(metadata);
  //   const argsLength = this.contextUtils.getArgumentsLength(keys, metadata);
  //   const paramtypes = this.contextUtils.reflectCallbackParamtypes(
  //     instance,
  //     methodName,
  //   );
  //   const contextFactory = this.contextUtils.getContextFactory(
  //     contextType,
  //     instance,
  //     instance[methodName],
  //   );
  //   const getParamsMetadata = (moduleKey: string) =>
  //     this.exchangeKeysForValues(
  //       keys,
  //       metadata,
  //       moduleKey,
  //       this.wsParamsFactory,
  //       contextFactory,
  //   );

  //   const handlerMetadata: WsHandlerMetadata = {
  //     argsLength,
  //     paramtypes,
  //     getParamsMetadata,
  //   };
  //   // this.handlerMetadataStorage.set(instance, methodName, handlerMetadata);
  //   return handlerMetadata;
  // }

  // public exchangeKeysForValues<TMetadata = any>(
  //   keys: string[],
  //   metadata: TMetadata,
  //   moduleContext: string,
  //   paramsFactory: WsParamsFactory,
  //   contextFactory: (args: unknown[]) => ExecutionContextHost,
  // ): ParamProperties[] {
  //   this.pipesContextCreator.setModuleContext(moduleContext);

  //   return keys.map(key => {
  //     const { index, data, pipes: pipesCollection } = metadata[key];
  //     const pipes =
  //       this.pipesContextCreator.createConcreteContext(pipesCollection);
  //     const type = this.contextUtils.mapParamType(key);

  //     if (key.includes(CUSTOM_ROUTE_ARGS_METADATA)) {
  //       const { factory } = metadata[key];
  //       const customExtractValue = this.contextUtils.getCustomFactory(
  //         factory,
  //         data,
  //         contextFactory,
  //       );
  //       return { index, extractValue: customExtractValue, type, data, pipes };
  //     }
  //     const numericType = Number(type);
  //     const extractValue = (...args: any[]) =>
  //       paramsFactory.exchangeKeyForValue(numericType, data, args);

  //     return { index, extractValue, type: numericType, data, pipes };
  //   });
  // }
}