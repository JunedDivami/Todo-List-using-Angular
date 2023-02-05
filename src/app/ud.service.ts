import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import { DisplayComponent } from './display/display.component';

import { AppComponent } from './app.component';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class UdService {
  private us = new BehaviorSubject<any>(null);
  ns = this.us.asObservable();
  constructor(private component:AppComponent){}
  // title:string = ''
  // desc:string = ''

  todo:Todo[]=[];
 
  // callComponentMethod() {
  //   this.component.subject.next();
  // }


  updatetodo(atodo:Todo){
    this.todo.push(atodo);
    this.component.task(this.todo);

    return this.todo;
  
  }
  // recievetodo(){
  //   return this.todo;
  // }

  deletetodo(dtodo:Todo){
    console.log("delete todo works");
    const index = this.todo.indexOf(dtodo);
    this.todo.splice(index,1);
  }

  // func(at:any){
  //   // this.updatetodo(atodo);
  //   console.log(at);
  //   this.us.next(at);
  // }
  

  


}
