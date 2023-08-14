import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient(): void {
    const name: string = this.nameInput.nativeElement.value;
    const amount: number = Number(this.amountInput.nativeElement.value);

    if (name !== '' && amount <= 0) {
      console.error('ERROR: Ingredient addition failed. Invalid input values.');
      return;
    }

    this.shoppingListService.addIngredient(
      new Ingredient(name, amount)
    );
  }
}
