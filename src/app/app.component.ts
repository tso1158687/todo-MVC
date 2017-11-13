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

addToList() {
  this.list.push(this.todo);
  this.todo = '';
}

}
