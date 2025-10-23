import {Component, signal, WritableSignal, effect} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signal-ex-1',
  imports: [
    FormsModule
  ],
  templateUrl: './signal-ex-1.html',
  styleUrl: './signal-ex-1.css'
})
export class SignalEx1 {

  currentColor: WritableSignal<string> = signal("");

  nombre: number = -1;

  private _logColorChanges = effect(() => {
    this.nombre += 1;
    console.log(`Couleur selectionnée : ${this.currentColor()} Nombre changement : ${this.nombre}`);
  })

}


