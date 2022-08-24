import { Module } from '@nestjs/common';
import { LockdownService } from './lockdown.service';

@Module({
  providers: [LockdownService]
})
export class LockdownModule {}
