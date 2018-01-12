import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/cornbread_86386_16x9.jpg'),
    new Recipe('Another Recipe','This is another test', 'https://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/cornbread_86386_16x9.jpg')
  ];

  selecteditem = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
