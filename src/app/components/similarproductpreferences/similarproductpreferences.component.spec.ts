import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarproductpreferencesComponent } from './similarproductpreferences.component';

describe('SimilarproductpreferencesComponent', () => {
  let component: SimilarproductpreferencesComponent;
  let fixture: ComponentFixture<SimilarproductpreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarproductpreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarproductpreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
