import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalDataAuxComponent } from './external-data-aux.component';

describe('ExternalDataAuxComponent', () => {
  let component: ExternalDataAuxComponent;
  let fixture: ComponentFixture<ExternalDataAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalDataAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalDataAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
