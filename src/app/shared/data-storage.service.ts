import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://recipes-f9b0f-default-rtdb.firebaseio.com/recipes.json',
        recipes
      ).subscribe({
        next: response => console.log(response)
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>('https://recipes-f9b0f-default-rtdb.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe =>
          { return { ...recipe, ingredients: recipe.ingredients ?? [] } })
      }))
      .subscribe(recipes => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
