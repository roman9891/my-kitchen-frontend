import React from 'react';
import './App.css';
//import IngredientsContainer from "./Containers/IngredientsContainer";
//import RecipesContainer from "./Containers/RecipesContainer";
import Login from "./Components/Login"

class App extends React.Component {
  state={
    clicked: false
  }

cklickHandler = () => { let clicked = this.state.clicked
                        this.setState({clicked: !clicked})
  
}
  render(){

    return(
    <div>
     
      <button  onClick={this.cklickHandler}>Log In/Sign Up</button> 
      {this.state.clicked? <div><Login/></div> : null }
      
      {/* <IngredientsContainer  /> */}
      {/* <RecipesContainer/> */}
    </div>
    )
      
 }
}

export default App;
