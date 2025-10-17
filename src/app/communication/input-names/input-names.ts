import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {GetNames} from '../get-names/get-names';
import {UserServiceCom} from '../user-service-com';

@Component({
  selector: 'app-input-names',
  imports: [
    FormsModule,
    GetNames
  ],
  templateUrl: './input-names.html',
  styleUrl: './input-names.css'
})
export class InputNames implements OnInit {
  name: string = "";
  namesToTransfer: string[] = [];

  constructor(public userServiceCom: UserServiceCom) {
  }

  ngOnInit() {
    this.namesToTransfer = this.userServiceCom.getAll();
  }

  addToList(): void {
    this.namesToTransfer.push(this.name);
    this.name = "";
  }
}
