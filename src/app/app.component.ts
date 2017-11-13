import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
inputHint= '還有什麼事沒做呢?';
list: any[]= [];
todo= '';
filterType = 'All';
toggleAll= false;

addToList() {
  this.list.push({
    text: this.todo,
    done: false
  });
  this.todo = '';
  console.log(this.list);
}

clearCompleted() {
  this.list = this.list.filter(item => {
    return !item.done;
  });
}

filterTypeChanged(filterType: string) {
  this.filterType = filterType;
}

toggleAllChanged(value: boolean) {
  console.log(value);
  this.list.forEach(item => {
    item.done = value;
  });
}
updateToggleAllState() {
  this.toggleAll = this.list.filter(item => {
    return !item.done; }).length === 0 ;
}

removeList(list) {
  console.log(list);
  this.list.splice(this.list.indexOf(list), 1 );
}
}

