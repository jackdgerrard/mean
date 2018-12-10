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

  allRestaurants;
  currentSelection;

  username
  comments
  rating
  date

  neighborhood
  type

  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.allRestaurants = data;
    })
  }

  openRestaurant(restaurant) {
    console.log('clicked restaurant ' + restaurant._id);
    this.currentSelection = restaurant
  }

  //submit new review
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

    this.data.newData(temp).subscribe(data => {
      if (data) {
        console.log(`review sent`);
      } else console.log(`error`);
    });
  }

  onOrderSubmit() {
    let filters = { 'neighborhood': this.neighborhood, 'type': this.type };
    console.table(filters)
    this.data.getDataWithFilter(filters).subscribe(data => {
      this.allRestaurants = data;
    })
  }

  ascending() {
    this.allRestaurants.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });
  }

  descending() {
    this.allRestaurants.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      return a > b ? -1 : a < b ? 1 : 0;
    });
  }
}

