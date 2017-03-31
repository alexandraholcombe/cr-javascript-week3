import { Component } from '@angular/core';
import { Food } from './food.model'

@Component ({
  selector: 'app-root',
  template: `
  <div class="header-container">
    <h1 id="header"><i class="fa fa-cutlery" aria-hidden="true"></i>Foodr</h1>

    <select class="form-control pull-right" (change)="onChange($event.target.value)">
       <option value="allFoods">Show All</option>
       <option value="highCalorie">Show High Calorie Foods</option>
       <option value="lowCalorie">Show Low Calorie Foods</option>
     </select>

  </div>
  <div class="main">

    <food-list [childFoodList]="parentFoodList" (clickSender)="editFood($event)" [filterByCalories]="filterByCalories"></food-list>
    <add-food (newFoodSender)="addFood($event)"></add-food>
    <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="endEdit()"></edit-food>
  </div>
  `
})

export class AppComponent {
  parentFoodList: Food[] = [
    new Food('Raspberry Vanilla Refrigerator Oatmeal', 'Used skim milk', 230, 'breakfast'),
    new Food('Grilled Lemon Herb Mediterranean Chicken Salad', 'Added 1/2 cup crumbled feta, left off olives', 471, 'lunch'),
    new Food('Crock Pot Chicken Lasagna', 'Small servings, ate 2', 522, 'dinner'),
    new Food('Ben & Jerry\'s Strawberry Cheesecake Ice Cream', 'I didn\'t mean to', 520, 'dessert')
  ];

  selectedFood = null;

  addFood(newFoodFromChild: Food) {
    this.parentFoodList.push(newFoodFromChild);
  }

  editFood(foodToEdit: Food) {
    this.selectedFood = foodToEdit;
  }

  endEdit() {
    this.selectedFood = null;
  }

  filterByCalories: string = "allFoods";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
