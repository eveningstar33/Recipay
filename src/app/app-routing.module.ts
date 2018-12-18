import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },   // Only redirect if the full path is empty
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },  // Lazy Loading  
  // { path: 'recipes', component: RecipesComponent, children: [
  //   { path: '', component: RecipeStartComponent },
  //   { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },  // 'new' before ':id'
  //   { path: ':id', component: RecipeDetailComponent },
  //   { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
  // ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes)
    // The following strategy will preload all the lazy loading modules after the app has been loaded,
    // so not at the point of time you load the app initially, but once it runs.
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
