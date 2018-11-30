import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../validate.service";
import { AuthService } from "../auth.service";
import { Router, RouterLink } from "@angular/router";
import { fromEventPattern } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.sass"]
})
export class RegisterComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    console.log(user);

    //required fields
    if (this.validateService.validateRegister(user)) {
      console.log("please fill in the required field");
    }

    //register User

    this.auth.registerUser(user).subscribe(data => {
      if (data.success) {
        console.log(user.username + `\'s account has been created`);
        this.router.navigate(["/login"]);
      } else console.log(`error`);
    });
    //email validation here if email is implemented in applications user model
  }
}
