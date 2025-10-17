import { Component } from '@angular/core';
import {ChangeComponent} from '../change-component/change-component';

@Component({
  selector: 'app-display-component',
  imports: [
    ChangeComponent
  ],
  templateUrl: './display-component.html',
  styleUrl: './display-component.css'
})
export class DisplayComponent {
  numberToIncrement: number = 0;

}
