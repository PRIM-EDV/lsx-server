import { Module } from '@nestjs/common';
import { ReactorController } from './reactor.controller';
import { ReactorService } from './reactor.service';

@Module({
  imports: [],
  controllers: [ReactorController],
  providers: [ReactorService],
})
export class ReactorModule {}