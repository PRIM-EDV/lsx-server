import { Module } from '@nestjs/common';
import { LoggingService } from 'src/logging/logging.service';
import { ReactorController } from './reactor.controller';
import { ReactorGateway } from './reactor.gateway';
import { ReactorService } from './reactor.service';

@Module({
  imports: [],
  controllers: [ReactorController],
  providers: [LoggingService, ReactorService, ReactorGateway],
})
export class ReactorModule {}