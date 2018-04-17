import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from './user';


@Injectable()
export class UserService {

  private isUserLoggedIn = false;
  private username;
  private apiKey = 'none';
  private rootUrl = 'https://idnddb-195923.appspot.com/api/';

  constructor(private http: HttpClient) {
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  setApiKey(key) {
    localStorage.setItem("apiKey", key);
    this.apiKey = key;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
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
}