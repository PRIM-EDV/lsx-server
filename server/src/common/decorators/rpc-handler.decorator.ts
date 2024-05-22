import { Inject } from '@nestjs/common';

export function RpcHandler() {
  return <T extends new (...args: any[]) => {}>(constructor: T): T => {
    
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        
        console.log(global.onWebsocketRequest);
    };
  };
}
}
// //   return (target: Function) => {
// //     console.log('RpcHandler', target.prototype);
// //     console.log('Gateway:', gateway.prototype.onRequest);   
// //     console.log('Gateway:', target.prototype.gateway);

// //     const reflector = new Reflector();
// //     const moduleRef = reflector.get<any>(gateway.name, target);
// //     console.log('Reflector:', reflector);
// //     console.log('ModuleRef:', moduleRef);
//     // console.log(moduleRef.get(gateway, { strict: false }));
//     // const original = target.prototype.handleRequest;

//     // target.prototype.handleRequest = function (...args: any[]) {
//     //   const request$: Observable<any> = from(args);
      
//     //   request$.pipe(
//     //     map(request => {
//     //       console.log('Handling request:', request);
//     //       const methodNames = Object.getOwnPropertyNames(target.prototype)
//     //         .filter(prop => typeof target.prototype[prop] === 'function' && Reflect.getMetadata('request:type', target.prototype, prop));
  
//     //       for (const methodName of methodNames) {
//     //         const requestType = Reflect.getMetadata('request:type', target.prototype, methodName);
//     //         if (request.type === requestType) {
//     //           this[methodName](request);
//     //         }
//     //       }
//     //     })
//     //   ).subscribe();
      
//     //   if (original) {
//     //     original.apply(this, args);
//     //   }
//     // };
// //   };