import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
