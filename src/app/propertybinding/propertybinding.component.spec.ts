import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingComponent } from './propertybinding.component';

describe('PropertybindingComponent', () => {
  let component: PropertybindingComponent;
  let fixture: ComponentFixture<PropertybindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertybindingComponent],
    });
    fixture = TestBed.createComponent(PropertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
