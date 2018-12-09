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
  currentSelection;

  username
  comments
  rating
  date



  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.allRestaurants = data;
    })
  }

  openRestaurant(restaurant) {
    console.log('clicked restaurant ' + restaurant._id);
    this.currentSelection = restaurant
  }

  onReviewSubmit() {
    const review = {
      name: this.cookieService.get("username"),
      date: (new Date()).toLocaleDateString('en-GB'),
      comments: this.comments,
      rating: this.rating,
      restaurantName: this.currentSelection.name
    }

    let temp = this.currentSelection;
    temp.reviews.push(review);

    console.table(temp)

    this.data.updateRestaurant(temp).subscribe(data => {
      if (data) {
        console.log(`review sent`);
      } else console.log(`error`);
    });
  }
}

