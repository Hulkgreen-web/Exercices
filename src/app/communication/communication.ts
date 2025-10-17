import { Component } from '@angular/core';
import {InputNames} from './input-names/input-names';
import {GetNames} from './get-names/get-names';
import {ComEx2} from './com-ex-2/com-ex-2';
import {ComEx3} from './com-ex-3/com-ex-3';

@Component({
  selector: 'app-communication',
  imports: [
    InputNames,
    GetNames,
    ComEx2,
    ComEx3
  ],
  templateUrl: './communication.html',
  styleUrl: './communication.css'
})
export class Communication {

}
