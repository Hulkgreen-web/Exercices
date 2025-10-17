import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNames } from './input-names';

describe('InputNames', () => {
  let component: InputNames;
  let fixture: ComponentFixture<InputNames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
