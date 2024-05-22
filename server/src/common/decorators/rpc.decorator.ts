export function Rpc(): MethodDecorator {
    return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        // Add your decorator logic here
        // For example, you can modify the method behavior or add metadata
        console.log(global.blub);
        // Return the modified descriptor
        return descriptor;
    };
}