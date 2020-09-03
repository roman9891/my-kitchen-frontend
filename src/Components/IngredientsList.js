import React, { Component } from 'react';
import Ingredient from './Ingredient';


class IngredientsList extends Component {
    renderIngredients = () => this.props.ingredients
    .map((ingredient, i) => <Ingredient key={i} ingredient={ingredient}/>)
    
    render() {
        return (
            <div>
                {this.renderIngredients()}
            </div>
        );
    }
}

export default IngredientsList;
