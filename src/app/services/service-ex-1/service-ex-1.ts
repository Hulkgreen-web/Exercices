import {Component, OnInit} from '@angular/core';
import {Person, UserService} from './user-service';

@Component({
  selector: 'app-service-ex-1',
  imports: [],
  templateUrl: './service-ex-1.html',
  styleUrl: './service-ex-1.css'
})
export class ServiceEx1 implements OnInit {

  persons: Person[] = [];

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getPersons().subscribe(persons => {
      this.persons = persons;
      console.log("Persons loaded");
    });
  }


}
