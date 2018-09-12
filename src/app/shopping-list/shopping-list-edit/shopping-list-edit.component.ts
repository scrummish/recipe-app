import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  // Viewchild is being used to grab the local reference from the element
  @ViewChild('name') nameInputReference: ElementRef;
  @ViewChild('amount') amountInputReference: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingredientName = this.nameInputReference.nativeElement.value;
    const ingredientAmount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName,ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
