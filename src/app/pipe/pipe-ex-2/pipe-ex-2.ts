import { Component } from '@angular/core';
import {NumberPipePipe} from "../pipe-ex-1/number-pipe-pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChangePipePipe} from './change-pipe-pipe';

@Component({
  selector: 'app-pipe-ex-2',
  imports: [
    NumberPipePipe,
    ReactiveFormsModule,
    FormsModule,
    ChangePipePipe
  ],
  templateUrl: './pipe-ex-2.html',
  styleUrl: './pipe-ex-2.css'
})
export class PipeEx2 {
  text: string = "";
  choice: "letter" | "number" = "number";

}
