import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-second-component',
  imports: [],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css'
})
export class SecondComponent {
  @Output() fontColorChange: EventEmitter<string> = new EventEmitter();

  changeColor(value: string) {
    this.fontColorChange.emit(value);
  }
}
