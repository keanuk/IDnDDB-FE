import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log("Username: " + username + " Password: " + password);

    if(username == 'root' && password == 'root') {
      this.router.navigate(['/home']);
    }
    return false;
  }

}
