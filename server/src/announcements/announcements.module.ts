import { Module } from '@nestjs/common';
import { SoundModule } from 'src/sound/sound.module';
import { AnnouncementsService } from './announcements.service';

@Module({
  imports: [SoundModule],
  providers: [AnnouncementsService]
})
export class AnnouncementsModule {}
