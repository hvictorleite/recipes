import { Component, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('SlEditForm', {static: false}) SlEditForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient(): void {
    const name: string = this.SlEditForm.value.name;
    const amount: number = +this.SlEditForm.value.amount;

    this.shoppingListService.addIngredient(
      new Ingredient(name, amount)
    );
  }
}
