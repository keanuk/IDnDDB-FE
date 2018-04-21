import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alignment',
  templateUrl: './alignment.component.html',
  styleUrls: ['./alignment.component.css']
})
export class AlignmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setAlignment(myAlignment) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    newChar.desc = {"alignment": myAlignment};
    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }
}
