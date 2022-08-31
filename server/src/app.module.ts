import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QlcService } from './dmx/qlc.service';
import { LoggingService } from './logging/logging.service';
import { ReactorModule } from './reactor/reactor.module';
import { AuthModule } from './auth/auth.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { AppGateway } from './gateway/app.gateway';
import { LoggingModule } from './logging/logging.module';
import { GatewayModule } from './gateway/gateway.module';
import { LockdownModule } from './lockdown/lockdown.module';
import { FluffModule } from './fluff/fluff.module';
import { SoundModule } from './sound/sound.module';

@Module({
  imports: [
    AuthModule,
    ReactorModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AnnouncementsModule,
    GatewayModule,
    LoggingModule,
    LockdownModule,
    FluffModule,
    SoundModule
  ],
  controllers: [AppController],
  providers: [AppService, QlcService],
})
export class AppModule {}
