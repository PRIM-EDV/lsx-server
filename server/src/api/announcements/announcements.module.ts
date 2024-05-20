import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { SoundModule } from 'src/platform/sound/sound.module';

@Module({
  imports: [SoundModule],
  providers: [AnnouncementsService]
})
export class AnnouncementsModule {}
