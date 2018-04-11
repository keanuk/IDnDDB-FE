import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from './user';


@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;
  private apiKey;
  private rootUrl = 'https://idnddb-195923.appspot.com/api/';


  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
    this.apiKey ='';
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  setApiKey(key) {
    this.apiKey = key;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  getApiKey() {
    return this.apiKey;
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
    return this.rootUrl + 'putChars';
  }

  getGetCharUrl() {
    return this.rootUrl + 'getChars';
  }

  getRacesUrl() {
    return this.rootUrl + 'getRaces';
  }

  getClassesUrl() {
    return this.rootUrl + 'getClasses';
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

  getUserInfo(username, password, callback: (data) => void) {
    let header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + btoa(username + ":" + password),
      })
    };
    this.http.get<UserInfo[]>(this.getLoginUrl(), header).subscribe((data) => {
      callback(data);
    },
    err => {
      console.log("Error: " + err);
    });
  }

  createUser(username, password, callback: (data) => void) {
    let header = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + btoa(username + ":" + password),
      })
    };
    this.http.get<UserInfo[]>(this.getSignUpUrl(), header).subscribe((data) => {
      callback(data);
    },
    err => {
      console.log("Error: " + err);
    });
  }

}
