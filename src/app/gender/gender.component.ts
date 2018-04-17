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

  constructor(private router: Router, private user: UserService) {

  }

  ngOnInit() {
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
