
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class  RecipeService {
    recipeSelected= new EventEmitter<Recipe>();
    
    private recipes: Recipe[]= [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://storage.needpix.com/rsynced_images/food-1459693_1280.jpg', [new Ingredient('Meat', 1)])
    ]
    
    constructor(private slService: ShoppingListService ) {}
    
    getRecipes() {
        return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}