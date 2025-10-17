import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEx3 } from './com-ex-3';

describe('ComEx3', () => {
  let component: ComEx3;
  let fixture: ComponentFixture<ComEx3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComEx3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComEx3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
