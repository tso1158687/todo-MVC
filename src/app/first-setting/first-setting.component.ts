import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-setting',
  templateUrl: './first-setting.component.html',
  styleUrls: ['./first-setting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FirstSettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  click() {
    console.log('dotdotdot');
  }
}
