import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ph-input',
  templateUrl: './ph-input.component.html',
  styleUrls: ['./ph-input.component.scss']
})
export class PhInputComponent implements OnInit {

  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
