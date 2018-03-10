import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-picker',
  template: `
    <p>
      race-picker works!
    </p>
    <ul>
      <li>Human</li>
      <li>Dwarf</li>
      <li>Elf</li>
      <li>Orc</li>
    </ul>
    <br><br>
    <button routerLink="/portrait">Previous</button>
    <button routerLink="/class">Next</button>
  `,
  styles: []
})
export class RacePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
