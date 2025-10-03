import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEx1 } from './form-ex-1';

describe('FormEx1', () => {
  let component: FormEx1;
  let fixture: ComponentFixture<FormEx1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEx1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEx1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
