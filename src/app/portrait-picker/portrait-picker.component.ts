import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait-picker',
  template: `
    <p>
      portrait-picker works!
    </p>
    <br><br>
    <h2>Insert grid of portraits here</h2>
    <br><br>
    <button routerLink="/gender">Previous</button>
    <button routerLink="/race">Next</button>
  `,
  styles: []
})
export class PortraitPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
