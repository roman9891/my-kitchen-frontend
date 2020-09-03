import React from 'react';
import './App.css';
import IngredientsContainer from "./Containers/IngredientsContainer";
import RecipesContainer from "./Containers/RecipesContainer";

class App extends React.Component {
  state = {
    recipeSearch: []
  }
  appHandler = (ingredient) => {
    this.setState({recipeSearch: [...this.state.recipeSearch, ingredient]}, () => console.log(this.state))
  }

  render(){
    return(
    <div>
      <IngredientsContainer  appHandler={this.appHandler}/>
      <RecipesContainer searchTerms={this.state.recipeSearch}/>
    </div>
    )
      
 }
}

export default App;
