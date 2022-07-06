import { Module } from '@nestjs/common';
import { ReactorController } from './reactor.controller';

@Module({
  imports: [],
  controllers: [ReactorController],
  providers: [],
})
export class ReactorModule {}