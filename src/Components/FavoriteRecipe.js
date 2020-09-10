import React, { Component } from 'react';

class FavoriteRecipe extends Component {
    
    
    render() {
        //  const stepsArray = this.props.recipe.instructions.split('#')  //error: Can not read property of underfined.
        //  let instructions = stepsArray.map((step) => <p>{step}</p>)

        return ( console.log( this.props.recipe.instructions),
            <div id="favorite-recipe-container">
              <h2>{this.props.recipe.title}</h2> 
              <h6>{this.props.recipe.ingredients}</h6>
              <p> {this.props.recipe.instructions}</p> 
            </div>
        );
    }
}

export default FavoriteRecipe;

