import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductPreferencesComponent } from './similar-product-preferences.component';

describe('SimilarProductPreferencesComponent', () => {
  let component: SimilarProductPreferencesComponent;
  let fixture: ComponentFixture<SimilarProductPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarProductPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarProductPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
