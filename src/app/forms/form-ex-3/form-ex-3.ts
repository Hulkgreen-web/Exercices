import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-ex-3',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form-ex-3.html',
  styleUrl: './form-ex-3.css'
})
export class FormEx3 {
  formBuilder: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.formBuilder.group({
    generalInfoForm: this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required, Validators.pattern(/^[0-3]\d\/[01]\d\/[12]\d{3}$/)]]
    }),
    otherInfoForm: this.formBuilder.group({
      continueCourse: [false],
      angularKnowledge: ['', [Validators.required]],
      rating: [5, [Validators.required]]
    })
  });

  log(){
    console.log(this.form.value);
  }

  autocomplete() {
    this.form.setValue({
      generalInfoForm: {
        pseudo: "Warrior3000",
        password: "1234azerty",
        email: "warrior3000@warrior.it.be",
        birthDate: "13/10/1990",
      },
      otherInfoForm: {
        continueCourse: false,
        angularKnowledge: "school",
        rating: 5
      }
    });
  }
}
