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
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe({
        next: (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.SlEditForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
    });
  }

  onSubmit(): void {
    const formValue = this.SlEditForm.value;
    const newIngredient: Ingredient = new Ingredient(formValue.name+'', +formValue.amount);

    if (this.editMode)
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    else this.shoppingListService.addIngredient(newIngredient);

    this.onClear();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.SlEditForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
