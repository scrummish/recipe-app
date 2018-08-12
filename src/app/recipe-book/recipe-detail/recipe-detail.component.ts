import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { faTrashAlt, faEdit, faPlusCircle, faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faPlusCircle = faPlusCircle;
  faShare = faShare;
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
