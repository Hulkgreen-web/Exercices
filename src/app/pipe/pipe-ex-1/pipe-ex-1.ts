import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NumberPipePipe} from './number-pipe-pipe';

@Component({
  selector: 'app-pipe-ex-1',
  imports: [
    FormsModule,
    NumberPipePipe
  ],
  templateUrl: './pipe-ex-1.html',
  styleUrl: './pipe-ex-1.css'
})
export class PipeEx1 {
  text: string = "";

}
