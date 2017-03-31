import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFoodList">
    <h3>{{currentFood.name}}</h3>
    <p><span class="calories">{{currentFood.calories}}</span></p>
    <p><span class="details">{{currentFood.details}}</span></p>
    <p><span class="meal">{{currentFood.meal}}</span></p>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];

}
