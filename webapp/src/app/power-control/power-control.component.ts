import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-control',
  templateUrl: './power-control.component.html',
  styleUrls: ['./power-control.component.scss']
})
export class PowerControlComponent implements OnInit {

  public poweredStateBaseMedicine: boolean = false;
  public poweredStateUpperLeft: boolean = false;
  public poweredStateUpperRight: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeState(func: () => {}) {
    func();
  }

}
