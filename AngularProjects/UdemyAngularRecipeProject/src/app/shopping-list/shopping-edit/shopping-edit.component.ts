import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
   @ViewChild('f') form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.form.setValue({
          nameInput: this.editedItem.name,
          amountInput: this.editedItem.amount
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.nameInput, value.amountInput);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      form.reset();
    } else {
      this.slService.addIngredient(newIngredient);
      form.reset();
    }
    this.editMode = false; // reset button to 'add' instead of 'save'
  }
  onRemoveItem() {
    this.slService.removeIngrediant(this.editedItemIndex);
    this.onClearItem();
  }

  onClearItem() {
    this.slService.removeIngredients();
    this.form.reset();
    this.editMode = false;
  }

  onEditItem() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
