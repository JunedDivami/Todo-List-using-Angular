import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
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
  @Input() data:any = [];
  constructor(private udservice : UdService) {
    console.log("childcomclass");
  }
  task:Todo[] = [];
  todo:Todo = {title:'',desc : ''};
  title ='';
  desc = '';
  // @Output() todoadd: EventEmitter<Todo> = new EventEmitter();

  i:number = 0;
// todo:string = 'This is a todo';

ngOnChanges(changes:{[property: string]: SimpleChange}){
  let change: SimpleChange = changes['data']
  console.log("ngOnchange is working");
  this.udservice.deletetodo(this.data);

}

dataFromInput1(event:any){
  console.log(event);
  this.title = event;
}
dataFromInput2(event:any){
  console.log(event);
  this.desc = event;

  const todo:Todo = {
    title: this.title,
    desc: this.desc
  }
  this.todo = todo;
  // this.task = this.udservice.updatetodo(this.todo);
}

onSubmit(){
  this.i++;
  // const todo:Todo = {
  //   title: this.title,
  //   desc: this.desc
  // }
  // this.todoadd.emit(todo);
  setTimeout(() => {this.task = this.udservice.updatetodo(this.todo);}, 100);
  // this.task = this.udservice.updatetodo(this.todo);
  // this.udservice.func(todo);
  this.title=''
  this.desc=''
  
}

  // addTask(){
  //   this.i++;
  //   console.log(this.i);
  //   // this.task = this.udservice.updatetodo(this.todo+this.i);
  //   // this.comp.addingtodo(this.task);
  // }

  // deletetodo(todo:Todo){
  //   console.log("new technique is working")
  //   this.udservice.deletetodo(todo);
  // }
}
