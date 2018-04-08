import { Component, OnInit, HostBinding } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
// import { HttpHeaders, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

const TestHttpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Basic ' + btoa('davin' + ':' + 'p@ssword'),
  })
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

@Injectable()
export class LoginComponent implements OnInit {


  constructor(private router: Router, private user: UserService, private http: HttpClient) {

  }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log("Username: " + username + " Password: " + password);
    // console.log(this.http.get('https://idnddb-195923.appspot.com/api/login').subscribe(val => console.log(val)));

    let myHeaders = new HttpHeaders();
    myHeaders.set('Content-Type', 'application/json; charset=utf-8');
    myHeaders.append("Authorization", "Basic " + btoa(username + ":" + password));

    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + btoa(username + ":" + password),
      })
    };

    const newOptions = myHeaders.set('Content-Type', 'application/json; charset=utf-8').append("Authorization", "Basic " + btoa(username + ":" + password));


    console.log(httpOptions);

    // console.log(JSON.stringify(newOptions));

    // console.log(TestHttpOptions);

    let body = JSON.stringify(TestHttpOptions);

    this.http.post('https://idnddb-195923.appspot.com/api/login', body, httpOptions).subscribe(val => console.log(val));

    if(username == 'root' && password == 'root') {


      this.user.setUserLoggedIn();
      // this.user.setApiKey(key);
      this.router.navigate(['/home']);
    }
    return false;
  }

}
