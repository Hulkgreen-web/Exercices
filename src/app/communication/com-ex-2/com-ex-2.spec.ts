import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEx2 } from './com-ex-2';

describe('ComEx2', () => {
  let component: ComEx2;
  let fixture: ComponentFixture<ComEx2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComEx2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComEx2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
