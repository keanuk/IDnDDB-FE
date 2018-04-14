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

  setRace() {
    // let raceName
    this.dnd.getRaceList((data) => {
      console.log(data);
      return data;
    });
  }

}
