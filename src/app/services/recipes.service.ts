import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { Ingredient } from 'app/shared/ingredient.model';

@Injectable()
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test', 
      'https://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/cornbread_86386_16x9.jpg',
      [
        new Ingredient('Orange',2),
        new Ingredient​​('Bread', 1)
      ]),
    new Recipe(
      'Another Recipe',
      'This is another test', 
      'https://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/cornbread_86386_16x9.jpg',
      [
        new Ingredient​​('Buns', 2),
        new Ingredient​​('Apple', 1)
      ])
  ];

  selecteditem = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
