import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cdb-exercice3',
  imports: [
    FormsModule
  ],
  templateUrl: './cdb-exercice3.html',
  styleUrl: './cdb-exercice3.css'
})
export class CdbExercice3 {
  counter: number = 0;
  incrementNumber: number = 1;

  increment() {
    this.counter = this.counter + this.incrementNumber;
  }

}
