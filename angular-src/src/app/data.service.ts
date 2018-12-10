import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Import it up here
import { Observable } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';

import { restaurant } from './restaurant'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/data/all');
  }

  getDataWithFilter(filters) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    console.table(filters)

    return this.http.get("http://localhost:3000/data/filter", filters);
  }

  //update the restaurant with new data that includes review
  newData(newData) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/data/newData", newData)
      .pipe(map(res => res));
  }

}

