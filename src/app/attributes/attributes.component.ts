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

    newChar.mods = {"strengthMod" : Math.round((strength - 10) / 2), "dexterityMod" : Math.round((dexterity - 10) / 2), "constitutionMod" : Math.round((constitution - 10) / 2), "intelligenceMod" : Math.round((intelligence - 10) / 2), "wisdomMod" : Math.round((wisdom - 10) / 2), "charismaMod" : Math.round((charisma - 10) / 2)};

    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }

}
