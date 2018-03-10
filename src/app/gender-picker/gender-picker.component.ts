import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-picker',
  template: `
    <p>
      gender-picker works!
      <br><br>
      <button>Male</button>
      <button>Female</button>
      <button>Other</button>
      <br><br>
      <button routerLink="/portrait">Next</button>
    </p>
  `,
  styles: []
})
export class GenderPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
