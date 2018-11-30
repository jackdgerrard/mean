import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RestaurantsService {
  constructor(private http: Http) {}

  getAllRestaurants() {
    return this.http.get("http://localhost:3000/data/getall");
  }
}
