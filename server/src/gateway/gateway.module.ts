import { Global, Module } from '@nestjs/common';
import { LoggingModule } from 'src/logging/logging.module';
import { WebsocketGateway } from './websocket.gateway';
import { AuthModule } from 'src/api/auth/auth.module';

@Global()
@Module({
    imports: [
        AuthModule,
        LoggingModule
    ],
    exports: [
        WebsocketGateway
    ],
    providers: [
        WebsocketGateway
    ]
})
export class GatewayModule {}
