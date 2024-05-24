import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';
import { Subject } from 'rxjs';
import { Request } from 'proto/lsx';
declare global {
  namespace NodeJS {
    interface Global {
      // onWebsocketRequest: Subject<{clientId: string, msgId: string, request: Request, user: User}>;
      onWebsocketRequest: Subject<{clientId: string, msgId: string, request: Request}>;
      onWebsocketResponse: Subject<{clientId: string, msgId: string, response: Response}>;
    }
  }
}

global.onWebsocketRequest = new Subject<{clientId: string, msgId: string, request: Request}>();
global.onWebsocketResponse = new Subject<{clientId: string, msgId: string, response: Response}>();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useWebSocketAdapter(new WsAdapter(app));


  await app.listen(3100);
}
bootstrap();
