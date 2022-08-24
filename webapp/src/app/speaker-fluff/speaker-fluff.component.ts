import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { SpeakerFluffService } from './speaker-fluff.service';

@Component({
  selector: 'speaker-fluff',
  templateUrl: './speaker-fluff.component.html',
  styleUrls: ['./speaker-fluff.component.scss']
})
export class SpeakerFluffComponent implements OnInit {

  public flufftFiles: string[] = [];

  constructor(private readonly backend: BackendService, private readonly speakerFluffService: SpeakerFluffService) { 
    this.backend.onOpen.subscribe(async () => {
      this.speakerFluffService.getFluffFiles().then((files) => {
        this.flufftFiles = files;
      });
    });
  }

  ngOnInit(): void {
  }

}
