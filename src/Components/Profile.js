import React, { Component } from 'react';
import FavoritesList from "./FavoritesList";
import FavoriteRecipe from './FavoriteRecipe'

class Profile extends Component {
     state={
          recipe: ""
     }
   
clickHandler = (fav) => this.setState({recipe: fav})
   
     render() {  
         return (
           <div>
             <img id="avatar" src= {this.props.user.user.avatar} alt="generic avatar"></img><br></br>
             <h1> {this.props.user.user.username}</h1> 
           
                <div id="profile-containers">  
                <FavoritesList user = {this.props.user} clickHandler = {this.clickHandler}/>  
                <FavoriteRecipe  recipe = {this.state.recipe} />
                </div>
           </div>
         );
    }
}

export default Profile;
  