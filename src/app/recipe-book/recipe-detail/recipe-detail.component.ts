import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
