import { Component, OnInit, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

@Injectable()
export class SignupComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  createUser(e) {
    e.preventDefault();
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    let varifyPassword = e.target.elements[2].value;

    if(password != varifyPassword) {
      console.log("Passwords do no match");
      alert("Your passwords do not match");
    }
    else {
      let userData = this.user.createUser(username, password, (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      });
    }
  }

}
