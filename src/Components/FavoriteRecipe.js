import React, { Component } from 'react';

class FavoriteRecipe extends Component {
    render() {
        return ( 
            <div id="favorite-recipe-container">
              <h2>{this.props.recipe.title}</h2> 
              <h6>{this.props.recipe.ingredients}</h6>
              <p>{this.props.recipe.steps}</p> 
            </div>
        );
    }
}

export default FavoriteRecipe;
