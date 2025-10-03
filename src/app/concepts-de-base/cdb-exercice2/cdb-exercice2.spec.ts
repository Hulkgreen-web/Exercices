import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice2 } from './cdb-exercice2';

describe('CdbExercice2', () => {
  let component: CdbExercice2;
  let fixture: ComponentFixture<CdbExercice2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdbExercice2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdbExercice2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
