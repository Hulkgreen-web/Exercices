import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEx3 } from './form-ex-3';

describe('FormEx3', () => {
  let component: FormEx3;
  let fixture: ComponentFixture<FormEx3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEx3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEx3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
