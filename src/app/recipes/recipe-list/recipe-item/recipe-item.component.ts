import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../../recipe.model";
import { RecipesService } from 'app/services/recipes.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe​​;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onClick(recipe: Recipe) {
    this.recipesService.selecteditem.emit(recipe);
  }

}
