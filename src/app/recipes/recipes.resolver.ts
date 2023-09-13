import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { inject } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";

export const RecipesResolver: ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[]  => {
    const recipes = inject(RecipeService).getRecipes();

    if (recipes.length === 0)
      return inject(DataStorageService).fetchRecipes();
    else
      return recipes;
  }
