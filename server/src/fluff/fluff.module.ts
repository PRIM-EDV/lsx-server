import { Module } from '@nestjs/common';
import { FluffService } from './fluff.service';

@Module({
  providers: [FluffService]
})
export class FluffModule {}
