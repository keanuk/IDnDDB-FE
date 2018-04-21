import { Component, OnInit, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DndService } from '../dnd.service';


@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})


export class RaceComponent implements OnInit {

	loaded = false;
  races = [];
  constructor(private router: Router, private user: UserService, private dnd: DndService) { }

  ngOnInit() {
    this.dnd.getRaceList((data) => {
      console.log(data);
      this.races = data;
      this.loaded = true;
    });
  }

  setRace(myRace) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    newChar.race = myRace;

    if(myRace === "Human") {
      newChar.bonuses = {"strengthMod": 0, "dexterityMod": 0, "constitutionMod": 0, "intrelligenceMod": 0, "wisdomMod": 0, "charismaMod": 0};
    }

    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }
}
