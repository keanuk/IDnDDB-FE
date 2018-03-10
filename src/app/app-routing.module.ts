import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenderPickerComponent } from './gender-picker/gender-picker.component';
import { RacePickerComponent } from './race-picker/race-picker.component';
import { ClassPickerComponent } from './class-picker/class-picker.component';
import { PortraitPickerComponent } from './portrait-picker/portrait-picker.component';
import { AttributesPickerComponent } from './attributes-picker/attributes-picker.component';
import { SpellPickerComponent } from './spell-picker/spell-picker.component';
import { AlignmentPickerComponent } from './alignment-picker/alignment-picker.component';
import { BackgroundPickerComponent } from './background-picker/background-picker.component';

const routes: Routes = [
  { path: 'gender', component: GenderPickerComponent},
  { path: 'race', component: RacePickerComponent},
  { path: 'class', component: ClassPickerComponent},
  { path: 'portrait', component: PortraitPickerComponent},
  { path: 'attributes', component: AttributesPickerComponent},
  { path: 'spells', component: SpellPickerComponent},
  { path: 'alignment', component: AlignmentPickerComponent},
  { path: 'background', component: BackgroundPickerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GenderPickerComponent, RacePickerComponent, ClassPickerComponent, PortraitPickerComponent, AttributesPickerComponent, SpellPickerComponent, AlignmentPickerComponent, BackgroundPickerComponent];
