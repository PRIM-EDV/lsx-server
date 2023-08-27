import { Global, Module } from '@nestjs/common';
import { LoggingModule } from 'src/logging/logging.module';
import { AppGateway } from './app.gateway';

@Global()
@Module({
    imports: [
        LoggingModule
    ],
    exports: [
        AppGateway
    ],
    providers: [
        AppGateway
    ]
})
export class GatewayModule {}
