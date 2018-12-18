import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
    // DropdownDirective    // We delete DropdownDirective because we import the SharedModule
  ],
  imports: [
    BrowserModule,   // It contains all the features of the CommonModule and some additional features
    HttpModule,
    // RecipesModule,   // We delete it because we're using lazy loading
    // AppRoutingModule,  // We delete it because we export it in CoreModule 
    SharedModule,
    ShoppingListModule,
    AuthModule, 
    CoreModule  // CoreModule is loaded eagerly, it isn't loaded lazy
  ],
  // providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
