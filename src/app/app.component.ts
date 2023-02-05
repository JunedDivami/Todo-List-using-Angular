import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from './Todo';
import { UdService } from './ud.service';
console.log("appcomponent");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    // this.notify = new DisplayComponent();
    console.log("appcomclass");
  }
  todos:Todo[] = [];

  task(todoss:any){
    // this.notify.addingtodo(todos);
    this.todos = (todoss);
    // console.log(this.todos);
  }

  onDelete(todo: Todo){
    // this.service.deletetodo(todo);
    console.log("click works")
  }
}
