import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { Todo } from '../Todo';
import { UdService } from '../ud.service';
// import { Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [UdService]
})
export class DisplayComponent  {
  // public subject = new Subject<any>();
  // public observable = this.subject.asObservable();
  @Input() todos:Todo[] = [];
  @Output() sendDelete = new EventEmitter();
  t:Todo[]= [];

  constructor(private udservice : UdService){}
  
  // addingtodo(todos:string){
  //   this.todo = todos;
  //   console.log(this.todo);
  //   // this.todo = this.udservice.recievetodo();
  // }

  // ngOnInit() {
  //   this.udservice.ns.subscribe(val => console.log(val));
  //   console.log("on in it works");
  //   this.callservicefun();
    
  // }

  // callservicefun(){
  //   this.todo = this.udservice.recievetodo();
  //   console.log(this.todo)
  // }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    let change: SimpleChange = changes['todos']; 
    console.log("display functionality is working"+this.todos);
    this.t = this.todos;
  }

  deleteClick(t:Todo){
    this.sendDelete.emit(t);
  }


}
