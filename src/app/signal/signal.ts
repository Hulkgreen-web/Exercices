import { Component } from '@angular/core';
import {SignalEx1} from './signal-ex-1/signal-ex-1';
import {SignalEx2} from './signal-ex-2/signal-ex-2';

@Component({
  selector: 'app-signal',
  imports: [
    SignalEx1,
    SignalEx2
  ],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {

}
