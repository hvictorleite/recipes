import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath !== '' ? imagePath : 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png';
    this.ingredients = ingredients;
  }
}
