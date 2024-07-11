import { Module } from '@nestjs/common';
import { PowerApiController } from './power.api.controller';

@Module({
  imports: [
  ],
  providers: [PowerApiController],
})
export class PowerApiModule {}