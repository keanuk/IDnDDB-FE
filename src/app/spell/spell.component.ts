import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addSpell(name, desc, type, uses) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    if(newChar.skills) {
      newChar.skills.push({"name": name, "desc": desc, "type": type, "numUses": uses});
    }
    else {
      newChar.skills = [{"name": name, "desc": desc, "type": type, "numUses": uses}];
    }
  }
}
