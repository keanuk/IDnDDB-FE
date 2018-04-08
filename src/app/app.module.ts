import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { LoginComponent } from './login/login.component';
// import { EmailComponent } from './email/email.component';
// import { SignupComponent } from './signup/signup.component';
// import { MembersComponent } from './members/members.component';
// import { CreateComponent } from './create/create.component';
// import { HomeComponent } from './home/home.component';
// import { AlignmentComponent } from './alignment/alignment.component';
// import { AttributesComponent } from './attributes/attributes.component';
// import { BackgroundComponent } from './background/background.component';
// import { ClassComponent } from './class/class.component';
// import { GenderComponent } from './gender/gender.component';
// import { PortraitComponent } from './portrait/portrait.component';
// import { RaceComponent } from './race/race.component';
// import { SpellComponent } from './spell/spell.component';

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucker: '',
  messagingSenderId: ''
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
