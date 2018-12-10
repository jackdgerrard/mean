import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../validate.service";
import { AuthService } from "../auth.service";
import { Router, RouterLink } from "@angular/router";
import { fromEventPattern } from "rxjs";
import { CookieService } from "angular2-cookie/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.sass"]
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private validateService: ValidateService,
    private auth: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() { }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    //required fields
    if (!this.validateService.validateRegister(user)) {
      console.log("please fill in the required field");
    } else {
      console.table(user)
      //register User
      this.auth.registerUser(user).subscribe(data => {
        if (data) {
          console.log(user.username + `\'s account has been created`);
          this.cookieService.put("username", user.username);
          this.router.navigate(["/home"]);
        } else console.log(`error`);
      });
      //email validation here if email is implemented in applications user model
    }
  }
}
