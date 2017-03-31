import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
  <select (change)="onChange($event.target.value)">
     <option value="allFoods">Show All</option>
     <option value="highCalorie">Show High Calorie Foods</option>
     <option value="lowCalorie">Show Low Calorie Foods</option>
   </select><br>

  <div *ngFor="let currentFood of childFoodList | calorieLevel:filterByCalories">
    <h3>{{currentFood.name}}</h3>
    <p><span class="calories">{{currentFood.calories}}</span></p>
    <p><span class="details">{{currentFood.details}}</span></p>
    <p><span class="meal">{{currentFood.meal}}</span></p>
    <button class="btn" (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
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
