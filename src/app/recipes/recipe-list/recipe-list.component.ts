import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/api/recipe/recipe.interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    {
      name: 'Biryani',
      description:
        'Biryani is an intricate rice dish made with layers of curried meat and rice.',
      imagePath:
        'https://e7.pngegg.com/pngimages/917/228/png-clipart-biryani-indian-cuisine-biryani-buffet-take-out-kebab-biryani-food-recipe-thumbnail.png',
    },
    {
      name: 'Chawal',
      description:
        'Chawal is an intricate rice dish made with layers of curried meat and rice.',
      imagePath:
        'https://e7.pngegg.com/pngimages/917/228/png-clipart-biryani-indian-cuisine-biryani-buffet-take-out-kebab-biryani-food-recipe-thumbnail.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
