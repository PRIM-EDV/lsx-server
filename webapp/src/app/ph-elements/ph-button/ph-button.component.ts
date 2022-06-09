import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ph-button',
  templateUrl: './ph-button.component.html',
  styleUrls: ['./ph-button.component.scss']
})
export class PhButtonComponent implements OnInit {

  public isActive: boolean = false;

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {}

  ngOnInit(): void {
  }

}
