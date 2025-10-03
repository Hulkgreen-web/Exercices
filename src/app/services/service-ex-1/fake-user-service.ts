import {Injectable} from '@angular/core';
import {Person, UserService} from './user-service';
import {delay, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeUserService extends UserService {
  override getPersons(): Observable<Person[]> {
    return of([
      {firstName: "Arnaud", surName: "Bouillon"},
      {firstName: "Matteo", surName: "Pawlak"}
    ]).pipe(delay(2000))

  }

}
