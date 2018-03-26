import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AlignmentComponent } from './alignment/alignment.component';
// import { AttributesComponent } from './attributes/attributes.component';
// import { BackgroundComponent } from './background/background.component';
// import { ClassComponent } from './class/class.component';
// import { GenderComponent } from './gender/gender.component';
// import { PortraitComponent } from './portrait/portrait.component';
// import { RaceComponent } from './race/race.component';
// import { SpellComponent } from './spell/spell.component';

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
