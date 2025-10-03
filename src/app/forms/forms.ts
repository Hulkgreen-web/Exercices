import { Component } from '@angular/core';
import {FormEx1} from './form-ex-1/form-ex-1';
import {FormEx2} from './form-ex-2/form-ex-2';
import {FormEx3} from './form-ex-3/form-ex-3';

@Component({
  selector: 'app-forms',
  imports: [
    FormEx1,
    FormEx2,
    FormEx3
  ],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {

}
