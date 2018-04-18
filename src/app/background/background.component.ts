import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  submitChar(newChar) {
    this.user.submitNewChar(newChar, (data) => {
      console.log("Attempted to submit new character");
      console.log(data);
    })
  }

  setBackground(name, ideals, bonds, flaws, history, xp) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    newChar.name = name;
    newChar.desc.ideals = ideals;
    newChar.desc.bonds = bonds;
    newChar.desc.flaws = flaws;
    newChar.desc.background = history;
    newChar.exp = xp;
    console.log(newChar);
    localStorage.removeItem("newChar");

    this.submitChar(newChar);
  }

}
