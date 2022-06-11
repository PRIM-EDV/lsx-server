import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { PhButtonComponent } from '../ph-button/ph-button.component';


export interface PhButtonListOption {
  label: string;
  func: any;
} 

@Component({
  selector: 'ph-button-select',
  templateUrl: './ph-button-select.component.html',
  styleUrls: ['./ph-button-select.component.scss']
})
export class PhButtonSelectComponent implements OnInit, AfterContentInit {

  @Input() label: string = '';

  @ContentChildren(PhButtonComponent) buttonComponents!: QueryList<PhButtonComponent>;

  public value: string | number = '';

  constructor() { }

  ngAfterContentInit(): void {
    for(const button of this.buttonComponents) {
      button.onClick = this.onButtonClick.bind(this, button);
    }
  }

  onButtonClick(target: PhButtonComponent, evt: MouseEvent): void {
    for(const button of this.buttonComponents) {
      if(button.value == target.value) {
        button.isActive = true;
      }else{
        button.isActive = false;
      }
    }
  }

  ngOnInit(): void {
  }

}
