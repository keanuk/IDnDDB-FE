import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;
  private apiKey;

  constructor() {
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

}
