import { Component, ElementRef, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-input-com',
  templateUrl: './input-com.component.html',
  styleUrls: ['./input-com.component.css'],
})
export class InputComComponent {
  @Input() d:number = 0;
  @Output() sendData = new EventEmitter();
  title:string = '';
  desc:string = '';
  

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // Extract changes to the input property by its name
    let change: SimpleChange = changes['d'];
    // console.log(this.title+ "from input component");
    this.sendData.emit(this.title);
    this.title = '';
    // setTimeout(() => {this.title = ''}, 100);
  }

  constructor(){}
}
