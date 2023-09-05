import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('SlEditForm', {static: false}) SlEditForm: NgForm;
  subscription: Subscription
  editMode = false;
  editedItemIndex : number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe({
        next: (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
        }
    });
  }

  onAddIngredient(): void {
    const name: string = this.SlEditForm.value.name;
    const amount: number = +this.SlEditForm.value.amount;

    this.shoppingListService.addIngredient(
      new Ingredient(name, amount)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
