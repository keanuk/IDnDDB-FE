import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css']
})
export class PortraitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setPortrait(image) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    newChar.portrait = image;
    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }

}
