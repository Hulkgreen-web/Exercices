import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEx2 } from './signal-ex-2';

describe('SignalEx2', () => {
  let component: SignalEx2;
  let fixture: ComponentFixture<SignalEx2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEx2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEx2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
