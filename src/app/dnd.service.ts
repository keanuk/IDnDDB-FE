import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DndService {

  private rootUrl = 'https://idnddb-195923.appspot.com/api/';

  constructor(private http: HttpClient) { }

  getRootUrl() {
    return this.rootUrl;
  }

  getRacesUrl() {
    return this.rootUrl + 'getRaces';
  }

  getClassesUrl() {
    return this.rootUrl + 'getClasses';
  }

  getRaceList(callback: (data) => void) {
    this.http.get(this.getRacesUrl()).subscribe((data) => {
      callback(data);
    },
    err => {
      console.log("Error: " + err);
    });
  }

  getClassList(callback: (data) => void) {
    this.http.get(this.getClassesUrl()).subscribe((data) => {
      callback(data);
    },
    err => {
      console.log("Error: " + err);
    });
  }
}
