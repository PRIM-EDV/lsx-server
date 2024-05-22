import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';
import { Subject } from 'rxjs';
import { Request } from 'proto/lsx';
declare global {
  namespace NodeJS {
    interface Global {
      // onWebsocketRequest: Subject<{clientId: string, msgId: string, request: Request, user: User}>;
      onLsxRequest: Subject<{clientId: string, msgId: string, request: Request}>;
    }
  }
}

global.onWebsocketRequest = new Subject<{clientId: string, msgId: string, request: Request}>();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const d = new Date();

  app.enableCors();
  app.useWebSocketAdapter(new WsAdapter(app));


  await app.listen(3100);
}
bootstrap();
