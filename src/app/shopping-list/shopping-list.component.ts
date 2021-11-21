import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../api/recipe/ingredient.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    {
      name: 'Masala',
      amount: 5,
    },
    {
      name: 'Alo',
      amount: 3,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
