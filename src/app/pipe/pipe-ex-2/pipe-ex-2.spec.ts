import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeEx2 } from './pipe-ex-2';

describe('PipeEx2', () => {
  let component: PipeEx2;
  let fixture: ComponentFixture<PipeEx2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeEx2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeEx2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
