import React from 'react';
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


 }

  render(){
    return(
    <div>
      <IngredientsContainer search={this.state.search} searchHandler = {this.searchHandler} />
      <RecipesContainer/>
    </div>
    )
      
 }
}

export default App;
