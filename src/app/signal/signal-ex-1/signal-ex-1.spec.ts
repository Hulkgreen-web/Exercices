import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEx1 } from './signal-ex-1';

describe('SignalEx1', () => {
  let component: SignalEx1;
  let fixture: ComponentFixture<SignalEx1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEx1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEx1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
