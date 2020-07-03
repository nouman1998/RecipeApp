import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  constructor(private service: MainServiceService, private router: Router) {
  
  }
  recipes
    ngOnInit() {
    this.recipes = []
    console.log(this.recipes);
    this.recipes = this.service.getAllRecipes();

  }

  navigation(id) {
    this.router.navigate([`recipe/${id}`]);
  }


}
