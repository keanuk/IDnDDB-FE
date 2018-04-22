import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})

@Injectable()
export class GenderComponent implements OnInit {

  public myGender = '';

  constructor(private router: Router, private user: UserService) {

  }

  ngOnInit() {
    this.myGender = 'Other';
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    if(newChar.gender == null)
      newChar.gender = "Other";
  }

  setGender(myGender) {
    let newChar: {[k: string]: any} = {};
    if(localStorage.getItem("newChar") !== null) {
      newChar = JSON.parse(localStorage.getItem("newChar"));
    }
    newChar.gender = myGender;
    console.log(newChar);
    localStorage.setItem("newChar", JSON.stringify(newChar));
  }

}
