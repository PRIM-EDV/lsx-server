import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { PhButtonComponent } from '../ph-button/ph-button.component';


export interface PhButtonListOption {
  label: string;
  func: any;
} 

@Component({
  selector: 'ph-button-list',
  templateUrl: './ph-button-list.component.html',
  styleUrls: ['./ph-button-list.component.scss']
})
export class PhButtonListComponent implements OnInit, AfterContentInit {

  @Input() label: string = '';

  @ContentChildren(PhButtonComponent) buttonComponents!: QueryList<PhButtonComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    for(const button of this.buttonComponents) {
      button.onClick = this.onButtonClick.bind(this, button);
    }
  }

  onButtonClick(button: PhButtonComponent, evt: MouseEvent): void {
    for(const button of this.buttonComponents) {
      button.isActive = false;
    }
    button.isActive = true;
  }

  ngOnInit(): void {
  }

}
