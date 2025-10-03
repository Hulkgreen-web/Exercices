import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-ex-2',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-ex-2.html',
  styleUrl: './form-ex-2.css'
})
export class FormEx2 {
  formBuilder: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

}
