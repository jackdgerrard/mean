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

  //global data variables
  allRestaurants;
  currentSelection;

  //review variables
  username
  comments
  rating
  date

  //filters
  neighborhood
  type
  term

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

    this.data.newData(temp).subscribe(data => {
      if (data) {
        console.log(`review sent`);
      } else console.log(`error`);
    });
  }

  getByType() {
    this.data.getDatabyType(this.type).subscribe(data => {
      this.allRestaurants = data;
    });
  }

  getBySearch() {
    this.data.getDatabySearch(this.term).subscribe(data => {
      console.log(this.term)
      this.allRestaurants = data;
    });
  }

  getByNeighborhood() {
    this.data.getDatabyNeighborhood(this.neighborhood).subscribe(data => {
      this.allRestaurants = data;
    });
  }

  resetFilter() {
    this.data.getData().subscribe(data => {
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

