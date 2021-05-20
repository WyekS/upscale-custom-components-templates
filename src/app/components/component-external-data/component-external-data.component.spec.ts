import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExternalDataComponent } from './component-external-data.component';

describe('ComponentExternalDataComponent', () => {
  let component: ComponentExternalDataComponent;
  let fixture: ComponentFixture<ComponentExternalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentExternalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExternalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
