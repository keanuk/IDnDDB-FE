import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spell-picker',
  template: `
    <p>
      spell-picker works!
    </p>
    <ul>
      <li>Level 0</li>
      <li>Level 1</li>
      <li>Level 2</li>
      <li>Level 3</li>
      <li>Level 4</li>
      <li>Level 5</li>
      <li>Level 6</li>
      <li>Level 7</li>
      <li>Level 8</li>
      <li>Level 9</li>
    </ul>
    <br><br>
    <button routerLink="/attributes">Previous</button>
    <button routerLink="/background">Next</button>
  `,
  styles: []
})
export class SpellPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
