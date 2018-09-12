import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

Injectable()
export class ShoppingListService {
    // ingredientsChanged is used to notify and send the new ingredientsArray to the subscribed components
    // needed since I am sending a shallow copy of the ingredientsArray instead of a direct reference
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private _ingredients: Ingredient[] = [
        new Ingredient('apples', 5 ),
        new Ingredient('oranges', 12 )
    ];
    
    getIngredients(): Ingredient[] {
        return this._ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        // Adds the Ingredient to the ingredients array
        this._ingredients.push(ingredient);

        // Informs subscribed components of the changes to the ingredients array
        this.ingredientsChanged.emit(this._ingredients.slice());
    }
}