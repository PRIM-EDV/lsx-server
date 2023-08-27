import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const d = new Date();
  console.log(d.getHours());

  app.enableCors();
  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(3100);
}
bootstrap();
