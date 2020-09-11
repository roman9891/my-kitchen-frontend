import React, { Component } from 'react';

class FavoriteRecipe extends Component {
    
    
    render() {
           const stepsArray = `${this.props.recipe.instructions}`.split('#')  
           let instructions = stepsArray.map((step) => <p>{step}</p>)

        return ( 
            <div id="favorite-recipe-container">
              {this.props.recipe === "" ? null : 
                <>
                 <img src={this.props.recipe.image} alt="chef icon"></img>  
                 <h2>{this.props.recipe.title}</h2> 
                 <h6>{this.props.recipe.ingredients}</h6>
                 <h6> {instructions}</h6>
               </>
              }
            </div>
        );
    }
}

export default FavoriteRecipe;

