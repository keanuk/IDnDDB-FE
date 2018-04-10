import { Component, OnInit, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';

let apiKey = 'none';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

@Injectable()
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    let userData = this.user.getUserInfo(username, password, (data) => {
      if(data.str)
        apiKey = data.str;
      if(apiKey != 'none') {
        this.user.setUserLoggedIn();
        this.user.setApiKey(apiKey);
        this.router.navigate(['/home']);
      }
      else {
        alert("Please enter a valid user name and password");
      }
    });
  }

}
