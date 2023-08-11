import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png'),
      new Recipe('A Another Test Recipe', 'This is a another simply test',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
