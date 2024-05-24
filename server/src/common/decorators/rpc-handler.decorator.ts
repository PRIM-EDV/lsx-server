import { RPC_METADATA } from "../constants";
import { Request } from "proto/lsx";

export function RpcHandler() {
  return <T extends new (...args: any[]) => {}>(constructor: T): T => {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        
        global.onWebsocketRequest.subscribe((event: {clientId: string, msgId: string, request: Request}) => {
          for (const rpcMethod of Reflect.getOwnMetadata(RPC_METADATA, constructor.prototype)) {
            if (event.request[rpcMethod.name] !== undefined) {
              rpcMethod.call(this, event.request[rpcMethod.name]).then((value) => {
                const response = { [rpcMethod.name]: value}
                global.onWebsocketResponse.next({clientId: event.clientId, msgId: event.msgId, response: response})
              }
              ).catch((err) => {console.log(err)});
            }
          }
        });

      };
    };
  };
}