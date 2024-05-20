import { Global, Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReactorModule } from './api/reactor/reactor.module';
import { AuthModule } from './api/auth/auth.module';
import { AnnouncementsModule } from './api/announcements/announcements.module';
import { LockdownModule } from './api/lockdown/lockdown.module';
import { FluffModule } from './api/fluff/fluff.module';
import { DroneModule } from './api/drone/drone.module';
import { AppGateway } from './app.gateway';
import { LightModule } from './core/light/light.module';
import { LoggingModule } from './core/logging/logging.module';
import { StateModule } from './core/state/state.module';
import { QlcModule } from './platform/qlc/qlc.module';
import { SoundModule } from './platform/sound/sound.module';

@Global()
@Module({
  imports: [
    AuthModule,
    ReactorModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AnnouncementsModule,
    StateModule,
    LoggingModule,
    LockdownModule,
    FluffModule,
    SoundModule,
    DroneModule,
    QlcModule,
    LightModule
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
  exports: [AppGateway]
})
export class AppModule {}
