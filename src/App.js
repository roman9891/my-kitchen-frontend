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
    clicked: false,
    avatar: this.props.user.user.avatar
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
  avatarSubmitHandler = event => { 
    event.preventDefault(); 
    
    let options = { method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json',
                       Accept: 'application/json'
                       },
                    body: JSON.stringify({ avatar: event.target[0].value
                    })
                  }
    
     fetch(`http://localhost:4000/api/v1/users/${this.props.user.user.id}`, options)
     .then(response => response.json())
     .then (resp => {this.setState({avatar: resp.user.avatar}); console.log("resp:", resp); console.log("state:", this.state.avatar)
     });
     event.target.reset()
    }
  

  render(){

    return(
    <div id='app'>
      <div>
        <Header/>
          <Router> 
             <NavBar avatar={this.state.avatar}/> 
                <Route exact path = '/profile' render = {() => 
                  <Profile user = {this.props.user} 
                           avatar = {this.state.avatar} 
                           avatarSubmitHandler = {event => this.avatarSubmitHandler(event)}/>
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
