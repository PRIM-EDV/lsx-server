import {  MetadataScanner } from "@nestjs/core";
import { RPC_HANDLER_METADATA, RPC_METADATA } from "../constants";



export function RpcHandler(gateway: any) {
  return function (target: any) {
    Reflect.defineMetadata(RPC_HANDLER_METADATA, true, target);
  }

  // return <T extends new (...args: any[]) => {}>(constructor: T): T => {
  //   const rpcMethods = metadataScanner.getAllMethodNames(constructor.prototype)
  //     .filter((methodName) => {
  //       return Reflect.getOwnMetadata(RPC_METADATA, constructor.prototype[methodName]) !== undefined;
  //     })
  //     .map((methodName) => {
  //       // return contextCreator.create(constructor, constructor.prototype[methodName], 'moduleKey', methodName);
  //     });

  //   //ts-ignore
  //   // const rpcMethods = Object.getOwnPropertyDescriptors(constructor.prototype);
  //   // console.log(rpcMethods);
    
  //   // .filter((descriptor) => { 
  //   //   Reflect.getOwnMetadata(RPC_METADATA, descriptor.value) !== undefined;
  //   //  })

  //   // console.log(rpcMethods);

  //   return class extends constructor {
  //     constructor(...args: any[]) {
  //       super(...args);
  //       // console.log(Object.getOwnPropertyDescriptors(constructor));
  //       // console.log(metadataScanner.getAllMethodNames(this));
  //       // console.log(Reflect.getOwnMetadata(RPC_METADATA, metadataScanner.getAllMethodNames(this)[0]));
        
  //       // global.onWebsocketRequest.subscribe((event: {clientId: string, msgId: string, request: Request}) => {
  //       //   for (const rpcMethod of rpcMethods) {
  //       //     if (event.request[rpcMethod.name] !== undefined) {
  //       //       rpcMethod.call(this, event.request[rpcMethod.name]).then((value) => {
  //       //         const response = { [rpcMethod.name]: value}
  //       //         console.log(response);
  //       //         global.onWebsocketResponse.next({clientId: event.clientId, msgId: event.msgId, response: response})
  //       //       }
  //       //       ).catch((err) => {
  //       //         // const response = { [rpcMethod.name]: {error: err.message}}
  //       //         // global.onWebsocketResponse.next({clientId: event.clientId, msgId: event.msgId, response: response})
  //       //         // console.log(err);
  //       //       });
  //       //     }
  //       //   }
  //       // });

  //     };
  //   };
  // };
}