import React, { Component } from 'react';
import Search from  "../Components/Search";
import IngredientsList from "../Components/IngredientsList";


class IngredientsContainer extends Component {
    state={
        searchTerm: "",
        ingredientsList: []
      }
    
      
      searchHandler = event =>{ 
          this.setState({
             searchTerm: event.target.value
          })
          console.log(this.state)
     }

    // fetchIngredients()
    //.then(response => rsesponse.json())
    // .then(response => {this.setState({
    //        ingredientList: response
    //   })
    //   })

    render() {
        return (
            <div>
              <Search searchHandler = {this.searchHandler}/>  
              <IngredientsList ingredientsList = {this.state.ingredientsList}/>
            </div>
        );
    }
}

export default IngredientsContainer;

