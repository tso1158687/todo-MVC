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

  filterType= 'All';

  @Output()
   filterTypeChanged= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clearBtnOnClick() {
    this.clearCompleted.emit();
  }

  changeFilterType(filterType: string) {
    this.filterType = filterType;
    this.filterTypeChanged.emit(filterType);
  }

}
