import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { SpeakerFluffService } from './speaker-fluff.service';
import { Request } from 'proto/lsx';

@Component({
  selector: 'speaker-fluff',
  templateUrl: './speaker-fluff.component.html',
  styleUrls: ['./speaker-fluff.component.scss']
})
export class SpeakerFluffComponent implements OnInit {

    public flufftFiles: string[] = [];
    public fluffState: string | number = 'on';

    constructor(private readonly backend: BackendService, private readonly speakerFluffService: SpeakerFluffService) {};

    ngOnInit(): void {
        this.backend.onOpen.subscribe(async () => {
            this.flufftFiles = await this.speakerFluffService.getFluffFiles();

            const fluffSate = await this.speakerFluffService.getFluffState();
    
            this.updateLocalFluffState(fluffSate);
        });

        this.backend.onRequest.subscribe(this.handleRequest.bind(this));
    }

    public playAnnoucement(file: string) {
        const req: Request = {
            playAnnouncement: {filepath: `assets/wav/fluff/${file}`}
        }
    
        this.backend.request(req);
    }

    public async updateServerFluffState() {
        switch(this.fluffState) {
          case 'on': await this.speakerFluffService.setFluffState(true); break;
          case 'off': await this.speakerFluffService.setFluffState(false); break;
        }
      }

    private updateLocalFluffState(state: boolean) {
        (state) ? this.fluffState = 'on' : this.fluffState = 'off';
    }

    
    private handleRequest(event: {id: string, request: Request}) {
        if(event.request.setFluffState) {
          this.updateLocalFluffState(event.request.setFluffState.state!);
          this.backend.respond(event.id, {setFluffState: {}})
        }
    }
}


