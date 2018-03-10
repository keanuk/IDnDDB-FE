import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitPickerComponent } from './portrait-picker.component';

describe('PortraitPickerComponent', () => {
  let component: PortraitPickerComponent;
  let fixture: ComponentFixture<PortraitPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
