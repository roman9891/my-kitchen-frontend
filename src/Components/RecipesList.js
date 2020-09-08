import React, { Component } from 'react';
import Recipe from "./Recipe"

class RecipesList extends Component {
    renderRecipes = () => this.props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} user={this.props.user}/>)
    
    render() {
        return (
            <div id='recipes-list'>
                {this.renderRecipes()}
            </div>
        );
    }
}

export default RecipesList;
