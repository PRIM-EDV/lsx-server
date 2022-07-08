import { Component } from '@angular/core';
import { BackendService } from './backend/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'webapp';

  constructor(private readonly backend: BackendService) {}
}
