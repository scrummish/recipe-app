import { Component, OnInit, Input} from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe-book.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected(e) {
    e.preventDefault();
    this.recipeService.selectedRecipe.emit(this.recipe);

  }

}
