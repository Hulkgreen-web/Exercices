import { Component } from '@angular/core';
import {PipeEx1} from './pipe-ex-1/pipe-ex-1';
import {PipeEx2} from './pipe-ex-2/pipe-ex-2';

@Component({
  selector: 'app-pipe',
  imports: [
    PipeEx1,
    PipeEx2
  ],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe {

}
