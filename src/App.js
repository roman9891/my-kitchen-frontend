import React from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientsContainer from "./Containers/IngredientsContainer";
import RecipesContainer from "./Containers/RecipesContainer";

class App extends React.Component {
 

  render(){
    return(
    <div>
      <IngredientsContainer  />
      <RecipesContainer/>
     
    </div>
    )
      
 }
}

export default App;
