import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptsDeBase } from './concepts-de-base';

describe('ConceptsDeBase', () => {
  let component: ConceptsDeBase;
  let fixture: ComponentFixture<ConceptsDeBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptsDeBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptsDeBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
