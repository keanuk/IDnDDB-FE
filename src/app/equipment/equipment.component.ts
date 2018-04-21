import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addWeapon(name, desc, type, worth, sides, roles) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    if(newChar.weapons) {
      newChar.weapons.push({"name": name, "desc": desc, "type": type, "worth": worth, damage: {"sides": sides, "roles": roles}});
    }
    else {
      newChar.weapons = [{"name": name, "desc": desc, "type": type, "worth": worth, damage: {"sides": sides, "roles": roles}}];
    }
    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }

  addArmor(name, desc, worth, ac) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    if(newChar.clothes) {
      newChar.clothes.push({"name": name, "desc": desc, "worth": worth, "ac": ac});
    }
    else {
      newChar.clothes = [{"name": name, "desc": desc, "worth": worth, "ac": ac}];
    }
    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }

  addItem(name, desc, worth) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    if(newChar.inventory) {
      newChar.inventory.push({"name": name, "desc": desc, "worth": worth});
    }
    else {
      newChar.inventory = [{"name": name, "desc": desc, "worth": worth}];
    }
    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }

}
