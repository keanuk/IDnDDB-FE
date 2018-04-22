import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  loaded = false;
  chars = {};
  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
    this.user.getMyChars((data) => {
      this.chars = data;
      this.loaded = true;
    });
  }

  deleteAccount() {
    this.user.deleteAccount((data) => {
      console.log("Deleting Account");
      console.log(data);
    });
  }
}
