import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEx1 } from './service-ex-1';

describe('ServiceEx1', () => {
  let component: ServiceEx1;
  let fixture: ComponentFixture<ServiceEx1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceEx1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceEx1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
