import {Component, Input, OnInit} from '@angular/core';
import {UserServiceCom} from '../user-service-com';

@Component({
  selector: 'app-get-names',
  imports: [],
  templateUrl: './get-names.html',
  styleUrl: './get-names.css'
})
export class GetNames {
  @Input() names: string[] = [];

  constructor(public userServiceCom: UserServiceCom) {}

  /*refresh(): void {
    this.userServiceCom.getUserNames().subscribe(userNamesFromServer =>{
      this.names = userNamesFromServer;
      console.log(this.names);
    });
  }*/


}
