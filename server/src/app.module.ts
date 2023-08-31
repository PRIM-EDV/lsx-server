import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReactorModule } from './reactor/reactor.module';
import { AuthModule } from './auth/auth.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { LoggingModule } from './logging/logging.module';
import { GatewayModule } from './gateway/gateway.module';
import { LockdownModule } from './lockdown/lockdown.module';
import { FluffModule } from './fluff/fluff.module';
import { SoundModule } from './sound/sound.module';
import { QlcModule } from './dmx/qlc.module';
import { DroneModule } from './drone/drone.module';

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
    SoundModule,
    DroneModule,
    QlcModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
