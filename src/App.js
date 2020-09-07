import React from 'react';
import './App.css';
import IngredientsContainer from "./Containers/IngredientsContainer";
import RecipesContainer from "./Containers/RecipesContainer";
//import Login from "./Components/Login"
import Header from "./Components/Header"

class App extends React.Component {
  state = {
    recipeSet: new Set(),
    recipeArray: [],
    clicked: false
  }
  appHandler = (ingredient) => {
    this.setState({
      recipeSet: this.state.recipeSet.add(ingredient),
      recipeArray: Array.from(this.state.recipeSet)
    }, () => console.log(this.state))
  }

  clickHandler = () => { 
    let clicked = this.state.clicked
    this.setState({clicked: !clicked})
  }

  removeHandler = (item) => {
    this.state.recipeSet.delete(item)
    this.setState({
      recipeArray: Array.from(this.state.recipeSet)
    }, () => console.log(this.state))
  }


  render(){

    return(
    <div id='app'>
      <div>
        <Header/>
        <div id='app-containers'>
          <IngredientsContainer removeHandler={this.removeHandler} appHandler={this.appHandler} searchTerms={this.state.recipeArray}/>
          <RecipesContainer searchTerms={this.state.recipeArray}/>

        </div>
      </div>
    </div>
    )
      
 }
}

export default App;
