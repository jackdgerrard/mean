import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";


@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.sass"]
})
export class RestaurantsComponent implements OnInit {

  constructor(private data: DataService) { }

  allRestaurants: object;

  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.allRestaurants = data;
      console.table(data);
    })
  }
}

