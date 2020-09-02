import React from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientsContainer from "./Containers/IngredientsContainer";
import RecipesContainer from "./Containers/RecipesContainer";

class App extends React.Component {
  state={
    search: ""
  }

  
  searchHandler = event =>{ 
      this.setState({
         search: event.target.value
      })
      console.log(this.state)

      //place for fetch
 }

  render(){
    return(
    <div>
      <IngredientsContainer searchHandler = {this.searchHandler} />
      <RecipesContainer/>
     
    </div>
    )
      
 }
}

export default App;
