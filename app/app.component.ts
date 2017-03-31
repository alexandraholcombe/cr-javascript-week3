import { Component } from '@angular/core';
import { Food } from './food.model'

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>

    <food-list [childFoodList]="parentFoodList"></food-list>
    <add-food (newFoodSender)="addFood($event)"></add-food>
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

  addFood(newFoodFromChild: Food) {
    this.parentFoodList.push(newFoodFromChild);
  }
}
