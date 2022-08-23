import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'speaker-announcements',
  templateUrl: './speaker-announcements.component.html',
  styleUrls: ['./speaker-announcements.component.scss']
})
export class SpeakerAnnouncementsComponent implements OnInit {

  public announcementFiles: string[] = [];

  constructor(private readonly backend: BackendService) {
    this.backend.onOpen.subscribe(async () => {
      this.backend.getAnnouncementFiles().then((files) => {
        this.announcementFiles = files;
      });
    });
   }

  ngOnInit(): void {
  }

}
