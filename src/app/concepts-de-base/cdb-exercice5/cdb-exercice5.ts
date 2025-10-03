import {Component} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-cdb-exercice5',
  imports: [
    NgClass
  ],
  templateUrl: './cdb-exercice5.html',
  styleUrl: './cdb-exercice5.css'
})
export class CdbExercice5 {
  computer1: IComputer = {
    name: "Toshiba",
    price: 500,
    isPowerful: false
  };

  computer2: IComputer = {
    name: "Asus",
    price: 1000,
    isPowerful: true
  };
  _computers: IComputer[] = [this.computer1, this.computer2];

}

export interface IComputer {
  name: string;
  price: number;
  isPowerful: boolean;
}
