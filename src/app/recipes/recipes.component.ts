import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService]
  // If we provide the RecipeService in the RecipesComponent then all the components in this area share
  // the same instance. But if we navigate away to the shopping-list area the recipes component is 
  // destroyed and so is the instance of this service. And if we add a new recipe, we can see it in the 
  // list, but if we go to shopping-list area then go back to recipes area, the new recipe is gone. So 
  // what we need to do to ensure that our service survives is we need to add it to the app.module.ts.
  //  By adding it there we make sure that now we have one instance of the service all the time available
  // as long as our app is running.
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

}
