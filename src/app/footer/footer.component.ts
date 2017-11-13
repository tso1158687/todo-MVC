import { Component, OnInit, ViewEncapsulation, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  @Input()
  list: any[];

  @Output()
  clearCompleted= new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  clearBtnOnClick() {
    this.clearCompleted.emit();
  }

}
