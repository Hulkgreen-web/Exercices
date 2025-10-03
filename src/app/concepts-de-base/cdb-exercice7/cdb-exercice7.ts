import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cdb-exercice7',
  imports: [
    FormsModule
  ],
  templateUrl: './cdb-exercice7.html',
  styleUrl: './cdb-exercice7.css'
})
export class CdbExercice7 implements OnInit {
  tentative: number = 7;
  userInput: number = 0;
  numberToGuess = 0;

  ngOnInit(): void {
    this.numberToGuess = Math.floor((Math.random() * 100) + 1);
  }

  findNumber() {
    if (this.userInput == this.numberToGuess) {
      alert("Congratulations");
    } else if (this.userInput > this.numberToGuess) {
      alert("To high");
      this.tentative--;
    } else {
      alert("To low");
      this.tentative--;
    }
  }

  playGame(){
    while(this.tentative > 0){
      this.findNumber();
    }
  }
}
