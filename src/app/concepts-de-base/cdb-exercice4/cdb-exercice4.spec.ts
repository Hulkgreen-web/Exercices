import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice4 } from './cdb-exercice4';

describe('CdbExercice4', () => {
  let component: CdbExercice4;
  let fixture: ComponentFixture<CdbExercice4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdbExercice4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdbExercice4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
