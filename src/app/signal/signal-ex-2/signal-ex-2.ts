import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signal-ex-2',
  imports: [
    FormsModule
  ],
  templateUrl: './signal-ex-2.html',
  styleUrl: './signal-ex-2.css'
})
export class SignalEx2 {

  words: WritableSignal<string[]> = signal([]);
  word: string = "";

  saveWord(word: string) {
    this.words.update(words => [...words, word]);
    this.word = "";
  }

  stats: Signal<any> = computed(() => {
    const dictionnary: any = {};


    for (const letter of this.words().join("")) {
      if (!dictionnary[letter]) {
        dictionnary[letter] = 0;
      }
      dictionnary[letter]++;
    }

    // .entries(dictionnary) => [Entry,Entry,Entry] => Entry : clé, valeur
    return Object
      .entries(dictionnary)
      .map(
        ([letter,count]) => ({letter,count})
      );

    // [{o: 2}, {m: 2}, {e: 1}]
  });

}
