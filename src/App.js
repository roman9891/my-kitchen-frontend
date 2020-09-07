import React from 'react';
import './App.css';
import IngredientsContainer from "./Containers/IngredientsContainer";
import RecipesContainer from "./Containers/RecipesContainer";
import Login from "./Components/Login"
import Header from "./Components/Header"

class App extends React.Component {
  state = {
    recipeSearch: [],
    clicked: false
  }
  appHandler = (ingredient) => {
    this.setState({recipeSearch: [...this.state.recipeSearch, ingredient]}, () => console.log(this.state))
  }

  clickHandler = () => { 
    let clicked = this.state.clicked
    this.setState({clicked: !clicked})
  }
  render(){

    return(
    <div id='app'>
      <button  onClick={this.clickHandler}>Log In/Sign Up</button> 
      {this.state.clicked? <div><Login/></div> : null }
      <div>
        <Header/>
        <div id='app-containers'>
          <IngredientsContainer appHandler={this.appHandler}/>
          <RecipesContainer searchTerms={this.state.recipeSearch}/>
        </div>
      </div>
    </div>
    )
      
 }
}

export default App;
