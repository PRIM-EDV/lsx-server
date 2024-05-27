import { MetadataScanner, NestContainer } from "@nestjs/core";
import { GuardsConsumer, GuardsContextCreator } from "@nestjs/core/guards";
import { RpcContextCreator } from "./rpc-context-creator";
import { InjectionToken } from "@nestjs/common";
import { Injectable } from "@nestjs/common/interfaces";
import { iterate } from 'iterare';
import { InstanceWrapper } from "@nestjs/core/injector/instance-wrapper";
import { RPC_HANDLER_METADATA, RPC_METADATA } from "src/common/constants";

export class RpcModule {
    private readonly metadataScanner = new MetadataScanner();
    private contextCreator: RpcContextCreator;

    register(
        container: NestContainer,
    ) {
        this.contextCreator = new RpcContextCreator(
            new GuardsContextCreator(container),
            new GuardsConsumer(),
        );

        const modules = container.getModules();
        modules.forEach(({ providers }, moduleName: string) =>
            this.connectAllHandlers(providers, moduleName),
        );
    }

    public connectAllHandlers(
        providers: Map<InjectionToken, InstanceWrapper<Injectable>>,
        moduleName: string,
    ) {
        iterate(providers.values())
            .filter(wrapper => wrapper && !wrapper.isNotMetatype)
            .forEach(wrapper => this.connectHandler(wrapper, moduleName));
    }

    public connectHandler(wrapper: InstanceWrapper<Injectable>, moduleName: string) {
        const { instance, metatype } = wrapper;
        const metadataKeys = Reflect.getMetadataKeys(metatype);

        if (!metadataKeys.includes(RPC_HANDLER_METADATA)) {
            return;
        }

        const rpcMethods = this.metadataScanner.getAllMethodNames(instance as Object)
            .filter((methodName) => {
                return Reflect.getMetadata(RPC_METADATA, instance[methodName]) !== undefined;
            })
            .map((methodName) => {
                return this.contextCreator.create(instance as object, instance[methodName], moduleName, methodName);
            });

        global.onWebsocketRequest.subscribe((event: { clientId: string, msgId: string, request: Request }) => {
            for (const rpcMethod of rpcMethods) {
                if (event.request[rpcMethod.name] !== undefined) {
                    rpcMethod.call(this, event.request[rpcMethod.name]).then((value) => {
                        const response = { [rpcMethod.name]: value }
                        console.log(response);
                        global.onWebsocketResponse.next({ clientId: event.clientId, msgId: event.msgId, response: response })
                    }
                    ).catch((err) => {
                        // const response = { [rpcMethod.name]: {error: err.message}}
                        // global.onWebsocketResponse.next({clientId: event.clientId, msgId: event.msgId, response: response})
                        // console.log(err);
                    });
                }
            }
        });

        // this.webSocketsController.connectGatewayToServer(
        //     instance as NestGateway,
        //     metatype,
        //     moduleName,
        //     wrapper.id,
        // );

        //     const nativeMessageHandlers = this.metadataExplorer.explore(instance);
        // const messageHandlers = nativeMessageHandlers.map(
        //   ({ callback, message, methodName }) => ({
        //     message,
        //     methodName,
        //     callback: this.contextCreator.create(
        //       instance,
        //       callback,
        //       moduleKey,
        //       methodName,
        //     ),
        //   }),
    }
}