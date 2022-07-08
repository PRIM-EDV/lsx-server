import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingService } from './logging/logging.service';
import { ReactorModule } from './reactor/reactor.module';

@Module({
  imports: [
    ReactorModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LoggingService],
})
export class AppModule {}
