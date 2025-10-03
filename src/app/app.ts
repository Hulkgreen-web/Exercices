import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConceptsDeBase} from './concepts-de-base/concepts-de-base';
import {Forms} from './forms/forms';
import {Services} from './services/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConceptsDeBase, Forms, Services],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exercices');
}
