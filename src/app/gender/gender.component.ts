import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  constructor() {
  }

  male = "Male";
  female = "Female";
  other = "Other";
  
  getGender(gender) {
    console.log(gender);
  }

  ngOnInit() {
  }

}
