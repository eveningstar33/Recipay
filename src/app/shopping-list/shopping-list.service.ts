import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
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
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // Spread operator allow us to turn an array of elements into a list of elements, because the push
        // method is able to handle multiple objects: this.ingredients.push(1, 2), however it is not able 
        // to handle an array: this.ingredients.push(1, 2), or to be precise it can handle an array but 
        // then it would push this array as a single object to the other array. So by adding the spread 
        // operator we can now simply spread our ingredients into a list of single ingredients which are
        // now pushed without issues to our ingredients array.  
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}