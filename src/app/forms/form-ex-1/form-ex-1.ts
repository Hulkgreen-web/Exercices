import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {last} from 'rxjs';

interface UserTemplateDrivenForm {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-form-ex-1',
  imports: [
    FormsModule
  ],
  templateUrl: './form-ex-1.html',
  styleUrl: './form-ex-1.css'
})

export class FormEx1 {
  user: UserTemplateDrivenForm = {
    firstName: '',
    lastName: ''
  }
  protected readonly last = last;

  getValues() {
    return this.user.firstName + ' ' + this.user.lastName;
  }
}
