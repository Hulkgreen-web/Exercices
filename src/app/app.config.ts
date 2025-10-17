import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {UserService} from './services/service-ex-1/user-service';
import {FakeUserService} from './services/service-ex-1/fake-user-service';
import {UserServiceCom} from './communication/user-service-com';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: UserService, useClass: FakeUserService},
    {provide: UserServiceCom, useClass: UserServiceCom},
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
