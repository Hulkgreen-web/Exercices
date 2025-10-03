import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice5 } from './cdb-exercice5';

describe('CdbExercice5', () => {
  let component: CdbExercice5;
  let fixture: ComponentFixture<CdbExercice5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdbExercice5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdbExercice5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
