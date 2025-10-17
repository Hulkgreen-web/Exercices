import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-change-component',
  imports: [],
  templateUrl: './change-component.html',
  styleUrl: './change-component.css'
})
export class ChangeComponent {
  @Input() num : number = 0;
  @Output() changeNum: EventEmitter<number> = new EventEmitter();

  increment() {
    this.changeNum.emit(++this.num);
  }

  decrement() {
    this.changeNum.emit(--this.num);
  }
}
