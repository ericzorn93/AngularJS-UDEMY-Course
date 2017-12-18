import {Recipe} from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg"),
    new Recipe("Another" + " Test Recipe", "This is simply a test", "https://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg")
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
