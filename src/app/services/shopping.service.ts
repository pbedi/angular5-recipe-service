import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';

@Injectable()
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient​​[]>();

  private ingredients: Ingredient[] = [
      new Ingredient('Apple', 5),
      new Ingredient('Tomatoes', 10)
    ];
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient​​) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
