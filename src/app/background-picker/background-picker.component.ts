import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-picker',
  template: `
    <p>
      background-picker works!
    </p>
    <input type="text">
    <br><br>
    <button routerLink="/spells">Previous</button>
    <button>Complete</button>
  `,
  styles: []
})
export class BackgroundPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
