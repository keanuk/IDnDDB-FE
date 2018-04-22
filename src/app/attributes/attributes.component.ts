import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setAttributes(strength, dexterity, constitution, intelligence, wisdom, charisma) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    newChar.stats = {"strength" : strength, "dexterity" : dexterity, "constitution" : constitution, "intelligence" : intelligence, "wisdom" : wisdom, "charisma" : charisma};

    if(Math.round((strength - 10) / 2) >= 0) {
      newChar.mods = {"strengthMod" : Math.round((strength - 10) / 2)};
    }
    else {
      newChar.mods = {"strengthMod" : 0};
    }

    if(Math.round((dexterity - 10) / 2) >= 0) {
      newChar.mods = {"dexterityMod" : Math.round((dexterity - 10) / 2)};
    }
    else {
      newChar.mods = {"dexterityMod" : 0};
    }

    if(Math.round((constitution - 10) / 2) >= 0) {
      newChar.mods = {"constitutionMod" : Math.round((constitution - 10) / 2)};
    }
    else {
      newChar.mods = {"constitutionMod" : 0};
    }

    if(Math.round((intelligence - 10) / 2) >= 0) {
      newChar.mods = {"intelligenceMod" : Math.round((intelligence - 10) / 2)};
    }
    else {
      newChar.mods = {"intelligenceMod" : 0};
    }

    if(Math.round((wisdom - 10) / 2) >= 0) {
      newChar.mods = {"wisdomMod" : Math.round((wisdom - 10) / 2)};
    }
    else {
      newChar.mods = {"wisdomMod" : 0};
    }

    if(Math.round((charisma - 10) / 2) >= 0) {
      newChar.mods = {"charismaMod" : Math.round((charisma - 10) / 2)};
    }
    else {
      newChar.mods = {"charismaMod" : 0};
    }


    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }

}
