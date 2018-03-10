import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
// import { GenderPickerComponent } from './gender-picker/gender-picker.component';
// import { RacePickerComponent } from './race-picker/race-picker.component';
// import { ClassPickerComponent } from './class-picker/class-picker.component';
// import { AttributesPickerComponent } from './attributes-picker/attributes-picker.component';
// import { PortraitPickerComponent } from './portrait-picker/portrait-picker.component';
// import { SpellPickerComponent } from './spell-picker/spell-picker.component';
// import { AlignmentPickerComponent } from './alignment-picker/alignment-picker.component';
// import { BackgroundPickerComponent } from './background-picker/background-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
