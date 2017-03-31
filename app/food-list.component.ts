import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `

  <div class="wrapper">
    <div class="food-item" *ngFor="let currentFood of childFoodList | calorieLevel:filterByCalories">
      <h3>{{currentFood.name}}</h3>

      <p class="col-xs-6"><span class="meal">{{currentFood.meal}}</span></p>
      <p class="col-xs-6"><span class="calories">{{currentFood.calories}} calories</span></p>
      <p><span class="details">{{currentFood.details}}</span></p>
      <button class="btn" (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
    </div>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  filterByCalories: string = "allFoods";

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onChange(optionFromMenu) {
    console.log("change");
    this.filterByCalories = optionFromMenu;
  }
}
