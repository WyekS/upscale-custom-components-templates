import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExternalDataAuxComponent } from './component-external-data-aux.component';

describe('ComponentExternalDataAuxComponent', () => {
  let component: ComponentExternalDataAuxComponent;
  let fixture: ComponentFixture<ComponentExternalDataAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentExternalDataAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExternalDataAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
