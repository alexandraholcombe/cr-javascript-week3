import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'add-food',
  template: `
  <div class="add-food">
    <h2>Add New Food</h2>
    <div class="form-group">
     <label>Food</label>
     <input #newFood required>
    </div>
    <div class="form-group">
     <label>Meal</label>
     <input #newMeal required>
    </div>
    <div class="form-group">
     <label>Details</label>
     <input #newDetails required>
    </div>
    <div class="form-group">
     <label>Calories</label>
     <input type="number" #newCalories required>
    </div>
    <button class="btn btn-link"  (click)="submitForm(newFood.value, newDetails.value, newCalories.value, newMeal.value); newFood.value=''; newDetails.value=''; newCalories.value=''; newMeal.value='';">Add Food</button>
  </div>
  `
})

export class AddFoodComponent {
  @Output() newFoodSender = new EventEmitter();

  submitForm(food: string, details: string, calories: number, meal: string) {
    var newFoodToAdd: Food = new Food(food, details, calories, meal);
    this.newFoodSender.emit(newFoodToAdd);
  }
}
