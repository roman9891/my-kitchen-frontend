import React, { Component } from 'react';
import Search from  "../Components/Search";
import IngredientsList from "../Components/IngredientsList";
import UsedList from '../Components/UsedList'

// let fetchCount = 0

// const ingredientsSeeds = [
//     {
//         id: 0,
//         name: `apple`
//     },
//     {
//         id: 1,
//         name: `egg`
//     },
//     {
//         id: 2,
//         name: `milk`
//     }
// ]

class IngredientsContainer extends Component {

    state = {
        searchTerm: ``,
        resultsArray: []
    }

    searchHandler = form =>{ 
        this.setState({searchTerm: form.search}, this.fetchIngredients)
   }

    fetchIngredients = () => {
        fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=81b17e72c9484724a29239484ef6b188&query=${this.state.searchTerm}`)
        .then(r => r.json())
        .then(resultsArray => this.setState({resultsArray: resultsArray}))
    }
    

    render() {
        return (
            <div id='ingredients-container'>
              <Search searchHandler = {this.searchHandler}/>
              <UsedList removeHandler={this.props.removeHandler} usedItems={this.props.searchTerms}/> 
              {/* <IngredientsList appHandler={this.props.appHandler} ingredients = {ingredientsSeeds}/> */}
              <IngredientsList appHandler={this.props.appHandler} ingredients = {this.state.resultsArray}/>
            </div>
        );
    }
}

export default IngredientsContainer;

