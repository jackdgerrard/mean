import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../validate.service";
import { AuthService } from "../auth.service";
import { Router, RouterLink } from "@angular/router";
import { CookieService } from "angular2-cookie/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private validateService: ValidateService,
    private auth: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() { }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    //required fields
    if (!this.validateService.validateRegister(user)) {
      console.log("please fill in the required field");
    }

    this.auth.authenticateUser(user).subscribe(data => {
      if (data) {
        this.cookieService.put("username", user.username);
        this.router.navigate(["/home"]);
      } else {
        console.log(data);
      }
    });
  }
}
