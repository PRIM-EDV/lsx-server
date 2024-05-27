import { ContextType } from "@nestjs/common";
import { Controller } from "@nestjs/common/interfaces";
import { FORBIDDEN_MESSAGE, GuardsConsumer, GuardsContextCreator } from "@nestjs/core/guards";
import { ContextUtils } from "@nestjs/core/helpers/context-utils";
import { WsException } from "@nestjs/websockets";export class RpcContextCreator {

  private readonly contextUtils = new ContextUtils();

  constructor(
    private readonly guardsContextCreator: GuardsContextCreator,
    private readonly guardsConsumer: GuardsConsumer,
  ) { }

  public create(
    instance: Controller,
    callback: (...args: unknown[]) => void,
    moduleKey: string,
    methodName: string,
  ): (...args: any[]) => Promise<void> {
    const contextType: ContextType = 'rpc';
    const guards = this.guardsContextCreator.create(
      instance,
      callback,
      moduleKey,
    );

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
}