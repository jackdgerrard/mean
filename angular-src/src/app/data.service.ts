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

  getDatabyType(type) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    return this.http.get(`http://localhost:3000/data/filter/type${type}`).pipe(map(res => res));
  }

  getDatabyNeighborhood(neighborhood) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.get(`http://localhost:3000/data/filter/neighborhood${neighborhood}`).pipe(map(res => res));
  }

  getDatabySearch(term) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.get(`http://localhost:3000/data/search${term}`).pipe(map(res => res));
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

