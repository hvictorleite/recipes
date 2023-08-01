import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply recipe example.',
      'https://cdn-icons-png.flaticon.com/512/683/683488.png'),
    new Recipe('A Test Recipe', 'This is a simply recipe example.',
      'https://cdn-icons-png.flaticon.com/512/683/683488.png'),
    new Recipe('A Test Recipe', 'This is a simply recipe example.',
      'https://cdn-icons-png.flaticon.com/512/683/683488.png'),
    new Recipe('A Test Recipe', 'This is a simply recipe example.',
      'https://cdn-icons-png.flaticon.com/512/683/683488.png')
  ];

  constructor() {}

  ngOnInit(): void {

  }
}
