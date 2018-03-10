import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellPickerComponent } from './spell-picker.component';

describe('SpellPickerComponent', () => {
  let component: SpellPickerComponent;
  let fixture: ComponentFixture<SpellPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
