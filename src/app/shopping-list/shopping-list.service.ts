import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        // We'll return the ingredients, but only a copy of it with slice method. So that I can't access
        // the original array stored in the service.
        return this.ingredients.slice();  
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}