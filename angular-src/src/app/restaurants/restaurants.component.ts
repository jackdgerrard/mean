import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { CookieService } from "angular2-cookie/core";


@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.sass"]
})
export class RestaurantsComponent implements OnInit {



  constructor(private data: DataService, private cookieService: CookieService) { }

  allRestaurants: object;
  currentSelection: object;


  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.allRestaurants = data;
    })
  }

  openRestaurant(object) {

    console.log('clicked object ' + object.name);

    this.currentSelection = object
  }

  onReviewSubmit() {
    const review = {
      username: this.cookieService.get("username"),
      date: (new Date()).toLocaleDateString('en-GB'),
      comments: this.comments,
      rating: this.rating
    }
  }
}

