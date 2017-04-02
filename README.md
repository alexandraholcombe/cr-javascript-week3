# "Meal Tracker"

#### _Meal Tracker Webpage with Angular2_

#### By _**Alexandra Holcombe**_

## Planning
### **1.  Configuration/Dependencies**  
  * install npm, used in all the everything
  * install bower, used to manage front-end dependencies
  * install bootstrap, also used in all the everything  

### **2.  Specs**  

  **The user can create a food entry with details, calories, and meal designation.**  
  * Example Input: New food form: "Goldfish Crackers"  
  * Example Output: Added to foodlist  

  **The user can edit a food to change its details.**  
  * Example Input: *update-clicky*
  * Example Output: new content  

  **The user can filter foods by calories.**  
  * Example Input: Select view only low-calorie foods
  * Example Output: "Only low calorie foods  

### **3.  Integration**  

> **Components**  
  * food-list (all foods)
  * add-food (create new food)
  * edit-food (change new food)
  
> **Models**  
  * Food  

> **Pipes**
  * calorieLevel (high calorie or low calorie)

### **4.  UX/UI**  
  * Uses SASS & Bootstrap

### **5.  Polish**  
  * See if refactoring is needed
  * Delete unused code
  * Revisit README
  * Clone project from github to ensure works correctly!!

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Typescript](https://www.typescriptlang.org/)

## Installation

* `git clone <https://github.com/alexandraholcombe/cr-javascript-week3.git>`
* `cd cr-javascript-week3`
* `npm install`
* `bower install`
* `npm install bootstrap --save`
* `gulp build`

## Running / Development

* `gulp serve`
* Page will automatically open in browser

### Building

* `gulp build`

<!-- ### Known Bugs
* Modal only opens once until you have to refresh the page
* answer pages are a mess -->
