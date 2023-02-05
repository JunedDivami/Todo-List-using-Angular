import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { UdService } from '../ud.service';
// import { Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [UdService]
})
export class DisplayComponent implements OnInit {
  // public subject = new Subject<any>();
  // public observable = this.subject.asObservable();

  todo:any= [];

  constructor(private udservice : UdService){}
  
  // addingtodo(todos:string){
  //   this.todo = todos;
  //   console.log(this.todo);
  //   // this.todo = this.udservice.recievetodo();
  // }

  ngOnInit() {
    this.udservice.ns.subscribe(val => console.log(val));
    console.log("on in it works");
    this.callservicefun();
    
  }

  callservicefun(){
    this.todo = this.udservice.recievetodo();
    console.log(this.todo)
  }



}
