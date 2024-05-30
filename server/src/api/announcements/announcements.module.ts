import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { SoundModule } from 'src/platform/sound/sound.module';
import { AnnouncementsController } from './annoucements.controller';

@Module({
  imports: [SoundModule],
  providers: [
    AnnouncementsController,
    AnnouncementsService]
})
export class AnnouncementsModule {}
