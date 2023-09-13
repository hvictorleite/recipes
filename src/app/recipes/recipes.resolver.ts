import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { inject } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Observable } from "rxjs";

export const RecipesResolver: ResolveFn<Recipe[]> = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[]  => {
    return inject(DataStorageService).fetchRecipes();
  }
