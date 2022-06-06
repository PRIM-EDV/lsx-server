import { Component, OnInit } from '@angular/core';


export interface PhButtonListOption {
  label: string;
  func: any;
} 

@Component({
  selector: 'app-ph-button-list',
  templateUrl: './ph-button-list.component.html',
  styleUrls: ['./ph-button-list.component.scss']
})
export class PhButtonListComponent implements OnInit {

  public optionList: PhButtonListOption[] = [
    {label: "Login A", func: () => {}},
    {label: "Login B", func: () => {}}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
