import { Injectable } from '@angular/core';
import { Recipe } from './main-page/recipe';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  constructor() { }
  private recipes: Recipe[] = [
    { id: "1", title: "Spaghetti", imageUrl: "https://pixabay.com/get/54e9d6424256aa14f6d1867dda35367b1c3cd9e253517848_1920.jpg", ingredients: ["Noodles", "Spices", "Ketchup",] },
    { id: "2", title: "Cake", imageUrl: "https://pixabay.com/get/57e9d2424f57ae14f6d1867dda35367b1c3cd9e25351744e_1920.jpg", ingredients: ["Flour", "Chocolate Chip", "Water", "Oil"] },
    { id: "3", title: "French Fries", imageUrl: "https://pixabay.com/get/57e8d141485ba814f6d1867dda35367b1c3cd9e253507241_1920.jpg", ingredients: ["Potato", "Oil", "Spices",] }
  ];

  getAllRecipes() {
    console.log([...this.recipes])
    return [...this.recipes];
  }

  getRecipe(id) {

    var obj = this.recipes.filter(d => { return d.id == id });
    return obj;
  }





}
