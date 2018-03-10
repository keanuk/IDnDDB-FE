import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderPickerComponent } from './gender-picker.component';

describe('GenderPickerComponent', () => {
  let component: GenderPickerComponent;
  let fixture: ComponentFixture<GenderPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
