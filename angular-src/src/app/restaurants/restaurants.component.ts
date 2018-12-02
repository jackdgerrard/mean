import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "../restaurants.service";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.sass"]
})
export class RestaurantsComponent implements OnInit {
  allRestaurants: object;
  order: boolean = true;

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit() {
    this.allRestaurants = this.restaurantsService.getAllRestaurants();
    console.log(this.allRestaurants);
  }
}
