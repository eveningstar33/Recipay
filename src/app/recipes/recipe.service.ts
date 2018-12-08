import { Recipe } from './recipe.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 
        'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
        new Recipe('Another Test Recipe', 'This is another simply a test', 
        'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps48966_THCSS153652B01_23_6b-696x696.jpg')
    ];

    getRecipes() {
        // It will return a new array which is an exact copy of which is an exact copy of the one 
        // in this service file, because we don't want to return the exact array because if we change 
        // something in this array, we'll change the array in the service 
        return this.recipes.slice(); 
    }
}