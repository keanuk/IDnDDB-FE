import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Basic ' + btoa('testName' + ':' + 'testPass'),
  })
};

const headerDict = {
  'Content-Type': 'application/json',
  'Authorization' : 'Basic ' + btoa('testName' + ':' + 'testPass'),
};

const options = {
  headers: new Headers(headerDict),
};

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})

@Injectable()
export class GenderComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  male = "Male";
  female = "Female";
  other = "Other";

  GeraldTest() {
    // console.log(this.http.get('https://idnddb-195923.appspot.com/api/getGerald').subscribe(val => console.log(val)));
    let username: string = 'newname';
    let password: string = 'newpass';
    // let headers = new Headers(headerDict);
    // headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    // headers.append("Content-Type", "application/x-www-form-urlencoded");
    // headers.append("X-Testing", "Testing");
    this.http.get('https://idnddb-195923.appspot.com/api/testAuth', httpOptions).subscribe(val => console.log(val));
  }

  ngOnInit() {
  }

}
