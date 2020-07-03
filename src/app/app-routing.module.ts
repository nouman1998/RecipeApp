import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, NoPreloading } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ResourceLoader } from '@angular/compiler';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {path:'recipes',component:MainPageComponent},
  {path:'recipe/:id',component:RecipeDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
