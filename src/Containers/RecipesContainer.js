import React, { Component } from 'react';
import RecipesList from "../Components/RecipesList"
import {recipes} from '../recipeData'

let renderCount = 0
let fetchCount = 0 //used in commented out api fetch

class RecipesContainer extends Component {
    state = {
        ingredientsSearchArray: [],
        ingredientsString: `apple`,
        recipes: []
    }

    convertToString = searchArray => {
        let ingredientsString = ``

        searchArray.forEach(term => ingredientsString += `${term},+`)

        return ingredientsString.slice(0,-2)
    }

    fetchRecipes = () => {
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=81b17e72c9484724a29239484ef6b188&ingredients=${this.convertToString(this.props.searchTerms)}&ranking=1`)
        .then(r => r.json())
        .then(recipes => this.setState({recipes: recipes}))
        console.log(`fetch:`, fetchCount += 1)
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.searchTerms.length !== prevProps.searchTerms.length) {
    //         this.fetchRecipes() //uncomment fetchCount at top
    //         this.fakeFetch() //swap to above code to use api
    //     }
    // }

    //fakeFetch = () => this.setState({recipes: recipes})
    clickHandler = () => this.fetchRecipes()
    
    render() {
        console.log(`rendered :`, renderCount += 1, recipes)
        return (
            <div id='recipes-container'>
                <div id='search-recipe-btn' className="buttonHolder"><button onClick={this.clickHandler}>Find Recipes</button></div>
                
                <RecipesList recipes={this.state.recipes} user = {this.props.user}/>
            </div>
        );
    }
}

export default RecipesContainer;
