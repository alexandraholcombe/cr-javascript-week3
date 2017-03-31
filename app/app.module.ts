import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FoodListComponent } from './food-list.component';
import { AddFoodComponent } from './add-food.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent,
                  FoodListComponent,
                  AddFoodComponent
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
