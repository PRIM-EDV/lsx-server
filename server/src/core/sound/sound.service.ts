import { AudioService } from "src/platform/audio/audio.service";
import { Track } from "src/platform/audio/common/track";

export class SoundService {
    public announcementTrack: Track;
    public environmentTrack: Track;

    constructor(private readonly audio: AudioService) {
        this.announcementTrack = this.audio.createTrack();
        this.environmentTrack = this.audio.createTrack();
    }
}