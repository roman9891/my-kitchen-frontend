import React, { Component } from 'react';
import Search from  "../Components/Search";
import IngredientsList from "../Components/IngredientsList";


class IngredientsContainer extends Component {
    render() {
        return (
            <div>
              <Search/>  
              <IngredientsList/>
            </div>
        );
    }
}

export default IngredientsContainer;

