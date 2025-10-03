import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice3 } from './cdb-exercice3';

describe('CdbExercice3', () => {
  let component: CdbExercice3;
  let fixture: ComponentFixture<CdbExercice3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdbExercice3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdbExercice3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
