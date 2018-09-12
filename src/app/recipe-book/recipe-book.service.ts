import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    // Recipe() Class takes a name, description, and image url all type string 
    private recipes: Recipe[] = [
      new Recipe('Green Spaghetti', 'Creamy spaghetti', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/04/1517007351-delish-kids-rainbow-spaghetti-001.jpg', [new Ingredient('apples', 3 )] ),
      new Recipe('yellow Spaghetti', 'Creamy spaghetti', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/04/1517007351-delish-kids-rainbow-spaghetti-001.jpg', [new Ingredient('oranges', 2 )] ),
    ];

    // returns only a shallow copy of the array by using .slice() instead of getting a direct reference to the array
    getRecipes() : Recipe[] {
        return this.recipes.slice();
    }
}
