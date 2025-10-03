import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEx2 } from './form-ex-2';

describe('FormEx2', () => {
  let component: FormEx2;
  let fixture: ComponentFixture<FormEx2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEx2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEx2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
