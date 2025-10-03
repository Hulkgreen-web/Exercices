import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdbExercice1 } from './cdb-exercice1';

describe('CdbExercice1', () => {
  let component: CdbExercice1;
  let fixture: ComponentFixture<CdbExercice1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdbExercice1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdbExercice1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
