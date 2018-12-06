import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: object;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:3000/users/register", user, {
      headers: headers
    })
      .pipe(map(res => res));
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/users/authenticate", user)
      .pipe(map(res => res));
  }
}
