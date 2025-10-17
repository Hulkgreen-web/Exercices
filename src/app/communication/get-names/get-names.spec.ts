import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNames } from './get-names';

describe('GetNames', () => {
  let component: GetNames;
  let fixture: ComponentFixture<GetNames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetNames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
