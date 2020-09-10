import React, { Component } from 'react';
import FavoritesList from "./FavoritesList";
import FavoriteRecipe from './FavoriteRecipe'
import ChangeAvatarForm from './ChangeAvatarForm'

class Profile extends Component {
     state={
          recipe: "",
          avatarClicked: false
     }
   
clickHandler = (fav) => this.setState({recipe: fav})

avatarClickHandler = () => {this.setState({avatarClicked: !this.state.avatarClicked})
}
   
avatarSubmitHandler = event => {this.setState({avatarClicked: false}); this.props.avatarSubmitHandler(event)}
     render() {  
         return (
           <div>
             <img id="avatar" src= {this.props.avatar} alt="generic avatar"></img><br></br>
             <button onClick={this.avatarClickHandler}>Change Avatar</button>
             {this.state.avatarClicked === true ? 
                 <ChangeAvatarForm user = {this.props.user} avatarSubmitHandler = {event => this.avatarSubmitHandler(event)}/> : null }
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
  