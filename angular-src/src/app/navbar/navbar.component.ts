import { Component, OnInit } from "@angular/core";
import { CookieService } from "angular2-cookie/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.sass"]
})
export class NavbarComponent implements OnInit {
  constructor(private cookieService: CookieService) { }
  loggedIn: boolean;
  username: string;

  ngOnInit() {
    this.username = this.cookieService.get("username");
    if (this.username != null || this.username != undefined) {
      this.loggedIn = true;
    } else this.loggedIn = false;
  }

  logOut() {
    this.cookieService.put("username", null);
  }
}
