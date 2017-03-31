import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `

  <div class="wrapper">
    <div class="food-item" *ngFor="let currentFood of childFoodList | calorieLevel:filterByCalories">
      <h3>{{currentFood.name}}</h3>
      <div class="info-tainer row">
        <p class="details"><span>Details:</span><span>{{currentFood.details}}</span></p>
        <p class="col-xs-6"><span class="meal">{{currentFood.meal}}</span></p>
        <p class="col-xs-6"><span class="calories">{{currentFood.calories}} calories</span></p>
      </div>
      <button class="btn btn-link" (click)="editButtonHasBeenClicked(currentFood)">Edit</button>
    </div>
  </div>
  `
})

export class FoodListComponent {
  @Input() filterByCalories: string;
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
