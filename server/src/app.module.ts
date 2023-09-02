import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReactorModule } from './api/reactor/reactor.module';
import { AuthModule } from './api/auth/auth.module';
import { AnnouncementsModule } from './api/announcements/announcements.module';
import { LoggingModule } from './logging/logging.module';
import { GatewayModule } from './gateway/gateway.module';
import { LockdownModule } from './api/lockdown/lockdown.module';
import { FluffModule } from './api/fluff/fluff.module';
import { SoundModule } from './sound/sound.module';
import { QlcModule } from './dmx/qlc.module';
import { DroneModule } from './api/drone/drone.module';
import { LightService } from './light/light.service';
import { StateModule } from './state/state.module';

@Module({
  imports: [
    AuthModule,
    ReactorModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AnnouncementsModule,
    StateModule,
    GatewayModule,
    LoggingModule,
    LockdownModule,
    FluffModule,
    SoundModule,
    DroneModule,
    QlcModule,
    LightService,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
