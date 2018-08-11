import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // Recipe() Class takes a name, description, and image url all type string 
  recipes: Recipe[] = [
    new Recipe('Green Spaghetti', 'Creamy spaghetti', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/04/1517007351-delish-kids-rainbow-spaghetti-001.jpg' ),
    new Recipe('Green Spaghetti', 'Creamy spaghetti', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/04/1517007351-delish-kids-rainbow-spaghetti-001.jpg' ),
    new Recipe('Green Spaghetti', 'Creamy spaghetti', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/04/1517007351-delish-kids-rainbow-spaghetti-001.jpg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
