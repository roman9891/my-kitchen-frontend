import React, { Component } from 'react';
import Ingredient from './Ingredient';


class IngredientsList extends Component {
    renderIngredients = () => this.props.ingredients
    .map(ingredient => <Ingredient key={ingredient.id} ingredient={ingredient}/>)
    
    render() {
        return (
            <div>
                {this.renderIngredients()}
            </div>
        );
    }
}

export default IngredientsList;
