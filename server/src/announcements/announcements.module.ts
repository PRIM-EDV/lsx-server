import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';

@Module({
  imports: [],
  providers: [AnnouncementsService]
})
export class AnnouncementsModule {}
