import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cdb-exercice6',
  imports: [
    FormsModule
  ],
  templateUrl: './cdb-exercice6.html',
  styleUrl: './cdb-exercice6.css'
})
export class CdbExercice6 implements OnInit {
  numbers: number[] = [];
  numberToDelete: number = 0;

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.numbers.unshift(Math.floor(Math.random() * 100) + 1);
    }
  }

  deleteNumber() {
    if (this.numberToDelete != null) {
      const index = this.numbers.indexOf(this.numberToDelete);
      if (index > -1) {
        this.numbers.splice(index, 1);
      }
    }
  }
}
