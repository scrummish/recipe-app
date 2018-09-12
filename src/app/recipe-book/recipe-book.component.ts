import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe-book.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
      }
    )
  }
}
