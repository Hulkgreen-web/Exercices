import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getPersons(): Observable<Person[]>{
    return of([]);
  }
}

export interface Person {
  firstName: string;
  surName: string;
}
