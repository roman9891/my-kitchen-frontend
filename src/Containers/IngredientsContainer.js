import React, { Component } from 'react';
import Search from  "../Components/Search";
import IngredientsList from "../Components/IngredientsList";


class IngredientsContainer extends Component {

    state = {
        searchTerm: ``,
        resultsArray: []//[{id: 1, title: `apple`}]
    }

    searchHandler = event =>{ 
        this.setState({
           searchTerm: event.target.value
        })
   }
    
    fetchIngredients = () => {
        fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=81b17e72c9484724a29239484ef6b188&query=${this.state.searchTerm}`)
        .then(r => r.json())
        .then(resultsArray => this.setState({resultsArray: resultsArray}))
    }
    

    render() {
        //this.fetchIngredients()
        return (
            <div>

              <Search searchHandler = {this.searchHandler}/>  
              <IngredientsList ingredientsList = {this.state.ingredientsList}/>


            </div>
        );
    }
}

export default IngredientsContainer;

