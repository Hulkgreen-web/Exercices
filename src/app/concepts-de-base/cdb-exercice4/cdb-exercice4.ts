import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cdb-exercice4',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './cdb-exercice4.html',
  styleUrl: './cdb-exercice4.css'
})
export class CdbExercice4 {
  inputValeur: string = '';

  is(state: string) {
    if (this.inputValeur.trim() === "") return false;

    const potentialNumber = Number(this.inputValeur);

    return (isNaN(potentialNumber) && state === "NaN")
      || (potentialNumber % 2 === 0 && state === "even")
      || (potentialNumber % 2 === 1 && state === "odd");
  }
}
