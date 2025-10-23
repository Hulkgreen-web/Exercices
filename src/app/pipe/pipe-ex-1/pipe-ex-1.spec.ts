import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeEx1 } from './pipe-ex-1';

describe('PipeEx1', () => {
  let component: PipeEx1;
  let fixture: ComponentFixture<PipeEx1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeEx1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeEx1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
