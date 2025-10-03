import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice7 } from './cdb-exercice7';

describe('CdbExercice7', () => {
  let component: CdbExercice7;
  let fixture: ComponentFixture<CdbExercice7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdbExercice7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdbExercice7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
