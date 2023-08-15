import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://as2.ftcdn.net/v2/jpg/01/38/80/65/1000_F_138806543_2qnuaBOHp8DrIQGaRFjyft2JwzX885K0.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say??',
      'https://cdn-cmjom.nitrocdn.com/FpMsHpAgoVrRMnuAdmBhGkyiizdsWlSU/assets/images/optimized/rev-dd2c928/wp-content/uploads/2015/07/king-burger-541x633.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
