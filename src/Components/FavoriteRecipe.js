import React, { Component } from 'react';

class FavoriteRecipe extends Component {
    render() {
        return ( 
            <div id="favorite-recipe-container">
              <h2>{this.props.recipe.title}</h2> 
              <h4>{this.props.recipe.ingredients}</h4>
              <h4>{this.props.recipe.instruction}</h4> 
            </div>
        );
    }
}

export default FavoriteRecipe;
