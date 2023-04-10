import {Component} from '@angular/core';
import {Food} from "../shared/moduls/Food";
import {FoodService} from "../services/food/food.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food!: Food

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodByID(params['id'])
      }
    })
  }

  ngOnInit() {

  }
}
