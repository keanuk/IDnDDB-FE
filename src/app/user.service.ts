import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from './user';


@Injectable()
export class UserService {

  private username;
  private apiKey = 'none';
  private rootUrl = 'https://idnddb-195923.appspot.com/api/';

  constructor(private http: HttpClient) {
  }

  getCheckTokenUrl() {
    return this.getRootUrl() + 'checkToken';
  }

  getUserName() {
    return localStorage.getItem("username");
  }

  setApiKey(key) {
    localStorage.setItem("apiKey", key);
    this.apiKey = key;
  }

  getApiKey() {
    return localStorage.getItem('apiKey');
  }

  getRootUrl() {
    return this.rootUrl;
  }

  getLoginUrl() {
    return this.rootUrl + 'login';
  }

  getSignUpUrl() {
    return this.rootUrl + 'signup';
  }

  getPutCharUrl() {
    return this.rootUrl + 'putChar';
  }

  getGetCharUrl() {
    return this.rootUrl + 'getChars';
  }

  getDeleteUserUrl() {
    return this.rootUrl + 'you/should/not/call/this';
  }

  getDeleteCharUrl() {
    return this.rootUrl + 'deleteChar';
  }

  getDeleteAllCharsUrl() {
    return this.rootUrl + 'deleteChars';
  }

  createLoginHeader(username, password) {
    let header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + btoa(username + ":" + password),
      })
    };
    return header;
  }

  createApiHeader() {
    let header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + btoa(this.getApiKey() + ":" + ''),
      })
    };
    return header;
  }

  verifyLogin(callback: (data) => void) {
    let header =  this.createApiHeader();
    this.http.get(this.getCheckTokenUrl(), header).subscribe((data) => {
      console.log("Checking api token");
      console.log(data);
      callback(data);
    },
    err => {
      console.log(err);
    });
  }

  submitNewChar(newChar, callback: (data) => void) {
    console.log("Submitting new Character");
    let header = this.createApiHeader();
    this.http.post(this.getPutCharUrl(), newChar, header).subscribe((data) => {
      console.log(data);
      callback(data);
    },
    err => {
      console.log(err);
    });
  }

  getMyChars(callback: (data) => void) {
    console.log("API Key is: " + this.getApiKey());
    let header = this.createApiHeader();
    this.http.get(this.getGetCharUrl(), header).subscribe((data) => {
      console.log(data);
      callback(data);
    },
    err => {
      console.log(err);
    });
  }

  getUserInfo(username, password, callback: (data) => void) {
    localStorage.setItem('username', username);
    let header = this.createLoginHeader(username, password);
    this.http.get(this.getLoginUrl(), header).subscribe((data) => {
      callback(data);
    },
    err => {
      console.log(err);
    });
  }

  createUser(username, password, callback: (data) => void) {
    let header = this.createLoginHeader(username, password);
    this.http.get(this.getSignUpUrl(), header).subscribe((data) => {
      callback(data);
    },
    err => {
      console.log(err);
    });
  }

  deleteChar(newChar, callback: (data) => void) {
    console.log("Deleting");
    let header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + btoa(this.getApiKey() + ":" + newChar),
      })
    };
    this.http.post(this.getDeleteCharUrl(), header).subscribe((data) => {
      console.log(data);
      callback(data);
    },
    err => {
      console.log(err);
    });
  }


  deleteAccount(callback: (data) => void) {
    let header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + btoa(this.getUserName() + ":" + "root"),
      })
    };
    this.http.get(this.getDeleteUserUrl(), header).subscribe((data) => {
      console.log(data);
      callback(data);
    },
    err => {
      console.log(err);
    });
  }
}
