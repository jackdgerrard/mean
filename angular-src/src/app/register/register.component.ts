import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../validate.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.sass"]
})
export class RegisterComponent implements OnInit {
  username: String;
  password: String;

  constructor(private validateService: ValidateService) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };
    if (!this.validateService.validateRegister(user)) {
      console.log("please fill in the required field");
    }
    //email validation here if email is implememnted in applications user model
  }
}
