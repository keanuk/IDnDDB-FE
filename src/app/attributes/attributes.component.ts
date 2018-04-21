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

    newChar.mods = {"strengthMod" : (strength - 10) / 2, "dexterityMod" : (dexterity - 10) / 2, "constitutionMod" : (constitution - 10) / 2, "intelligenceMod" : (intelligence - 10) / 2, "wisdomMod" : (wisdom - 10) / 2, "charismaMod" : (charisma - 10) / 2};

    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }

}
