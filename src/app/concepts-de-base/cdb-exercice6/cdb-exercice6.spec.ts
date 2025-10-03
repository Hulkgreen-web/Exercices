import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice6 } from './cdb-exercice6';

describe('CdbExercice6', () => {
  let component: CdbExercice6;
  let fixture: ComponentFixture<CdbExercice6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdbExercice6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdbExercice6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
