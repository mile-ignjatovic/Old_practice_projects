import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx'

import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, 
        private recipeService: RecipeService, 
        private authService: AuthService) {}
    storeRecipes() {
        const token = this.authService.getToken();
        console.log('store recipes method called');
        return this.http.put('https://udemy-project-f773a.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }
    fetchRecipes() {
        const token = this.authService.getToken();
        console.log('fetch recipes method called');
        return this.http.get('https://udemy-project-f773a.firebaseio.com/recipes.json?auth=' + token)
        .map(
            (response: Response) => {
                console.log('in response of fetch recipes methd')
                const recipes: Recipe[] = response.json();
                for (let r of recipes) {
                    if (!r['ingredients']) {
                        r['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
        .subscribe(
            (recipes: Recipe[]) => {
                return this.recipeService.setRecipes(recipes);
            },
            (error: Response) => {
                return Observable.throw('there was an error getting data from firebase!');
            }
        );
    }
}