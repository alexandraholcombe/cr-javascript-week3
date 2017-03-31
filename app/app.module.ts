import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { FoodListComponent } from './food-list.component';
import { AddFoodComponent } from './add-food.component';
import { EditFoodComponent } from './edit-food.component';
import { CalorieLevelPipe } from './calorie-level.pipe';

@NgModule({
  imports: [  BrowserModule,
              FormsModule
            ],
  declarations: [ AppComponent,
                  FoodListComponent,
                  AddFoodComponent,
                  EditFoodComponent,
                  CalorieLevelPipe
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
