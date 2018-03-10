import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes-picker',
  template: `
    <p>
      attributes-picker works!
    </p>
    <ul>
      <li>Strength</li>
      <li>Intelligence</li>
      <li>Wisdom</li>
      <li>Dexterity</li>
      <li>Stamina</li>
    </ul>
    <br><br>
    <button routerLink="/alignment">Previous</button>
    <button routerLink="/spells">Next</button>
  `,
  styles: []
})
export class AttributesPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
