import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from './Todo';
import { UdService } from './ud.service';
import { HeaderComponent } from './header/header.component';
import { Subject } from 'rxjs';
console.log("appcomponent");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventsSubject: Subject<void> = new Subject<void>();

// emitEventToChild() {
//   this.eventsSubject.next();
// }
public i:any = [];

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

  onDelete(todo: any){
    // this.service.deletetodo(todo);
    // this.header.deletetodo(todo);
    this.i = todo;
    console.log("click works")
  }
}
