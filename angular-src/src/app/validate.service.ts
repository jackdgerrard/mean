import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidateService {
  constructor() {}

  validateRegister(user) {
    if ((user.username = undefined || user.password == undefined)) {
      return false;
    } else return true;
  }

  validateEmail(email) {
    let regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
    return regex.test(email);
  }
}
