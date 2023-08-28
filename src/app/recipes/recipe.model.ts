import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(id: number, name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath !== '' ? imagePath : 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png';
    this.ingredients = ingredients;
  }
}
