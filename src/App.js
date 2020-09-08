import React from 'react';
import './App.css';
import IngredientsContainer from "./Containers/IngredientsContainer";
import RecipesContainer from "./Containers/RecipesContainer";
import NavBar from './Components/NavBar'
import Header from "./Components/Header"
import Profile from "./Components/Profile"
import {BrowserRouter as Router, Route} from 'react-router-dom';


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
          <Router> 
             <NavBar/> 
                <Route exact path = '/profile' render = {() => 
                  <Profile user = {this.props.user}/>
                }/>
               <Route exact path = '/' render = { ()=>     
                  <div id='app-containers'>
                  <IngredientsContainer removeHandler={this.removeHandler} 
                                        appHandler={this.appHandler} 
                                        searchTerms={this.state.recipeArray}/>
                  <RecipesContainer searchTerms={this.state.recipeArray}
                                    user={this.props.user}/>
                  </div> 
                }/>      
          </Router> 
      </div>
    </div>
    )
      
 }
}

export default App;
