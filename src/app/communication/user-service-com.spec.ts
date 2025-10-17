import { TestBed } from '@angular/core/testing';

import { UserServiceCom } from './user-service-com';

describe('UserServiceCom', () => {
  let service: UserServiceCom;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceCom);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
