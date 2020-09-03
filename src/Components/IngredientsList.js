import React, { Component } from 'react';
import Ingredient from './Ingredient';


class IngredientsList extends Component {

    render() {

   let ingredients = () => this.props.ingredientsList.map((ing) =><li><Ingredient /></li> )

        return (
            <ul>
              {ingredients}   
            </ul>
        );
    }
}

export default IngredientsList;
