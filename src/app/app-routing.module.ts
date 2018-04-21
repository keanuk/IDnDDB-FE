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
import { EquipmentComponent } from './equipment/equipment.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CharactersComponent } from './characters/characters.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'create', children: [
    { path: 'gender', component: GenderComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'portrait', component: PortraitComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'race', component: RaceComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'class', component: ClassComponent, children: [
      { path: '', component: CreateComponent},
    ]},
    { path: 'equipment', component: EquipmentComponent, children: [
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
    { path: 'inventory', component: InventoryComponent, children: [
      { path: '', component: CreateComponent},
    ]},
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CreateComponent, GenderComponent, PortraitComponent, RaceComponent, ClassComponent, EquipmentComponent, AttributesComponent, SpellComponent, AlignmentComponent, BackgroundComponent, LoginComponent, SignupComponent, CharactersComponent, InventoryComponent];
