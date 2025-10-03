import { Component } from '@angular/core';
import {ServiceEx1} from './service-ex-1/service-ex-1';
import {FormEx2} from '../forms/form-ex-2/form-ex-2';
import {Login} from './service-ex-2/login/login';
import {Header} from './service-ex-2/header/header';

@Component({
  selector: 'app-services',
  imports: [
    ServiceEx1,
    Login,
    Header
  ],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

}
