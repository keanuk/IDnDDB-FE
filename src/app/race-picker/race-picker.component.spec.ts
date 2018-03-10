import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacePickerComponent } from './race-picker.component';

describe('RacePickerComponent', () => {
  let component: RacePickerComponent;
  let fixture: ComponentFixture<RacePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
