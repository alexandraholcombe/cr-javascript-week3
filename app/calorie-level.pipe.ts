import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "calorieLevel",
  pure: false
})

export class CalorieLevelPipe implements PipeTransform {
  transform(input: Food[], desiredcalorieLevel) {
    var output: Food[] = [];
    if (desiredcalorieLevel === "highCalorie"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredcalorieLevel === "lowCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
