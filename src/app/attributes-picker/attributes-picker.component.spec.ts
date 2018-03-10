import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesPickerComponent } from './attributes-picker.component';

describe('AttributesPickerComponent', () => {
  let component: AttributesPickerComponent;
  let fixture: ComponentFixture<AttributesPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributesPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
