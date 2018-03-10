import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alignment-picker',
  template: `
    <p>
      alignment-picker works!
    </p>
    <button>Lawful Good</button>
    <button>Neutral Good</button>
    <button>Chaotic Good</button>
    <br>
    <button>Lawful Neutral</button>
    <button>Neutral</button>
    <button>Chaotic Neutral</button>
    <br>
    <button>Lawful Evil</button>
    <button>Neutral Evil</button>
    <button>Chaotic Evil</button>
    <br><br>
    <button routerLink="/class">Previous</button>
    <button routerLink="/attributes">Next</button>
  `,
  styles: []
})
export class AlignmentPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
