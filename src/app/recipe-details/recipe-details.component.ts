import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private service:MainServiceService,private router:Router) { }
  id;
  recipe

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      console.log(param)
      this.id = param.get('id');
      if(this.id){
        this.recipe=this.service.getRecipe(this.id)[0];
        console.log(this.recipe)
      }
    });
  }

  
}
