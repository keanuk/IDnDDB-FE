import { Component, OnInit, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DndService } from '../dnd.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  loaded = false;
  classes = [];
  constructor(private router: Router, private user: UserService, private dnd: DndService) { }

  ngOnInit() {
    this.dnd.getClassList((data) => {
      console.log(data);
      this.classes = data;
      this.loaded = true;
    });
  }

  setClass(myClass) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    newChar.class = myClass;
    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }

}
