import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-picker',
  template: `
    <p>
      class-picker works!
    </p>
    <h3>Base Classes</h3>
    <ul>
      <li>Barbarian</li>
      <li>Fighter</li>
      <li>Rogue</li>
      <li>Paladin</li>
      <li>Monk</li>
      <li>Bard</li>
      <li>Wizard</li>
      <li>Sorcerer</li>
      <li>Cleric</li>
      <li>Favored Soul</li>
    </ul>
    <br>
    <h3>Prestige Classes</h3>
    <ul>
      <li>Blackguard</li>
      <li>Eldrich Knight</li>
      <li>Pale Master</li>
      <li>Red Dragon Disciple</li>
    </ul>
    <br><br>
    <button routerLink="/race">Previous</button>
    <button routerLink="/alignment">Next</button>
  `,
  styles: []
})
export class ClassPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
