import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

import { ValidateService } from "./validate.service";
import { AuthService } from "./auth.service";
import { RestaurantsService } from "./restaurants.service";
import { CookieService } from "angular2-cookie/services/cookies.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
  providers: [ValidateService, RestaurantsService, AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
