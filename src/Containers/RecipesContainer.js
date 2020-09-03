import React, { Component } from 'react';
import RecipesList from "../Components/RecipesList"

const searchTerms = [`apple`, `eggs`, `flour`, `rice`]

class RecipesContainer extends Component {
    state = {
        ingredientsSearchArray: [],
        ingredientsString: `apple`,
        recipes: [{title: `test`, id: 1}, {title: `test2`, id: 2}]
    }

    convertToString = searchArray => {
        let ingredientsString = ``

        searchArray.forEach(term => ingredientsString += `${term},+`)

        return ingredientsString.slice(0,-2)
    }

    fetchRecipes = () => {
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=81b17e72c9484724a29239484ef6b188&ingredients=${this.convertToString(this.props.searchTerms)}`)
        .then(r => r.json())
        .then(recipes => this.setState({recipes: recipes}))
    }

    componentDidUpdate(prevProps) {
        //fetchRecipes()
        if (this.state.props !== prevProps) {
            this.fetchRecipes()
        }
    }
    
    render() {
        //console.log(this.convertToString(searchTerms))
        return (
            <div>
                <RecipesList recipes={this.state.recipes}/>
            </div>
        );
    }
}

export default RecipesContainer;
