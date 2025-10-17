import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConceptsDeBase} from './concepts-de-base/concepts-de-base';
import {Forms} from './forms/forms';
import {Services} from './services/services';
import {Communication} from './communication/communication';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConceptsDeBase, Forms, Services, Communication],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exercices');
}
