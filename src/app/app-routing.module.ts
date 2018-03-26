import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { AttributesComponent } from './attributes/attributes.component';
import { BackgroundComponent } from './background/background.component';
import { ClassComponent } from './class/class.component';
import { GenderComponent } from './gender/gender.component';
import { PortraitComponent } from './portrait/portrait.component';
import { RaceComponent } from './race/race.component';
import { SpellComponent } from './spell/spell.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'gender', component: GenderComponent},
  { path: 'race', component: RaceComponent},
  { path: 'class', component: ClassComponent},
  { path: 'portrait', component: PortraitComponent},
  { path: 'attributes', component: AttributesComponent},
  { path: 'spells', component: SpellComponent},
  { path: 'alignment', component: AlignmentComponent},
  { path: 'background', component: BackgroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, GenderComponent, RaceComponent, ClassComponent, PortraitComponent, AttributesComponent, SpellComponent, AlignmentComponent, BackgroundComponent];
