import { Module } from '@nestjs/common';
import { LoggingService } from 'src/logging/logging.service';
import { AnnouncementsGateway } from './announcements.gateway';
import { AnnouncementsService } from './announcements.service';

@Module({
  imports: [],
  providers: [LoggingService, AnnouncementsService, AnnouncementsGateway]
})
export class AnnouncementsModule {}
