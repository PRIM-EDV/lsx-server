import { Component } from '@angular/core';
import { PhElementsModule } from 'lib/phobos-elements/ph-elements.module';

@Component({
  selector: 'lsx-light-control',
  standalone: true,
  imports: [
    PhElementsModule
  ],
  templateUrl: './light-control.component.html',
  styleUrl: './light-control.component.scss'
})
export class LightControlComponent {
  public testState: string = 'off';
}
