import React, { Component } from 'react';
import Search from  "../Components/Search";
import IngredientsList from "../Components/IngredientsList";


class IngredientsContainer extends Component {

    state = {
        searchTerm: ``,
        resultsArray: []
    }

    searchHandler = event =>{ 
        this.setState({
           searchTerm: event.target.value
        }, this.fetchIngredients)
   }

    fetchIngredients = () => {
        fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=81b17e72c9484724a29239484ef6b188&query=${this.state.searchTerm}`)
        .then(r => r.json())
        .then(resultsArray => this.setState({resultsArray: resultsArray}))
    }
    

    render() {
        return (
            <div>
              <Search searchHandler = {this.searchHandler}/>  
              <IngredientsList ingredients = {this.state.resultsArray}/>
            </div>
        );
    }
}

export default IngredientsContainer;

