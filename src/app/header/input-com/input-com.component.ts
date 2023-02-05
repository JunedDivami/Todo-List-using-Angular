import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-com',
  templateUrl: './input-com.component.html',
  styleUrls: ['./input-com.component.css'],
})
export class InputComComponent {
  @ViewChild('inp') inp?:ElementRef;
  title:string = ''
  

  valueInput = this.inp?.nativeElement.value;

  constructor(){
    // console.log(this.valueInput);
  }
}
