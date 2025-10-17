import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceCom {

  /*names: string[] = [];

  saveName(name: string) {
    this.names.push(name);
  }

  getUserNames(): Observable<string[]> {
    return of(this.names);
  }*/

  static readonly NAMES_KEY = 'names';

  saveAll(names: string[]) {
    sessionStorage.setItem(UserServiceCom.NAMES_KEY, JSON.stringify(names));
  }

  getAll() : string[]{
    return JSON.parse(sessionStorage.getItem(UserServiceCom.NAMES_KEY) || "[]");
  }

}


