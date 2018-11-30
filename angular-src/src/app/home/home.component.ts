import { Component, OnInit } from "@angular/core";
import { CookieService } from "angular2-cookie/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  username: string;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.username = this.cookieService.get("username");

    if (this.username == undefined) {
      this.loggedIn = false;
    } else this.loggedIn = true;

    if (this.loggedIn) {
      console.log("hi name:" + this.username);
    }
  }
}
