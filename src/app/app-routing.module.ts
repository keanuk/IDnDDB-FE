import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { AttributesComponent } from './attributes/attributes.component';
import { BackgroundComponent } from './background/background.component';
import { ClassComponent } from './class/class.component';
import { GenderComponent } from './gender/gender.component';
import { PortraitComponent } from './portrait/portrait.component';
import { RaceComponent } from './race/race.component';
import { SpellComponent } from './spell/spell.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'email', component: EmailComponent},
  { path: 'members', component:MembersComponent},
  { path: 'create', children: [
    { path: 'gender', component: GenderComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'race', component: RaceComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'class', component: ClassComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'portrait', component: PortraitComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'attributes', component: AttributesComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'spells', component: SpellComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'alignment', component: AlignmentComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'background', component: BackgroundComponent, children: [
      { path: '', component: CreateComponent},
    ]},
  ]},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CreateComponent, GenderComponent, RaceComponent, ClassComponent, PortraitComponent, AttributesComponent, SpellComponent, AlignmentComponent, BackgroundComponent, LoginComponent, MembersComponent, SignupComponent, EmailComponent, HeaderComponent];
