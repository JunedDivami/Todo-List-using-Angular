import { Component, EventEmitter, Output } from '@angular/core';
import { UdService } from '../ud.service';
import { DisplayComponent } from '../display/display.component';
import { Todo } from '../Todo';

console.log("child component");
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UdService]
})
export class HeaderComponent {
  constructor(private udservice : UdService) {
    console.log("childcomclass");
  }
  task:Todo[] = [];
  title ='';
  desc = '';
  // @Output() todoadd: EventEmitter<Todo> = new EventEmitter();

  i:number = 0;
// todo:string = 'This is a todo';

onSubmit(){
  const todo:Todo = {
    title: this.title,
    desc: this.desc
  }
  // this.todoadd.emit(todo);
  this.task = this.udservice.updatetodo(todo);
  this.udservice.func(todo);
  this.title=''
  this.desc=''
  
}

  addTask(){
    this.i++;
    console.log(this.i);
    // this.task = this.udservice.updatetodo(this.todo+this.i);
    // this.comp.addingtodo(this.task);
  }
}
