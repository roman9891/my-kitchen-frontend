import React, { Component } from 'react';




class FavoritesList extends Component {
   
  state={
      favArray:[]
  }
    
 list = () => this.state.favArray.map((fav) => 
              <li id = "hover-li-favorites"key={fav.id} 
                  onClick = { () => {this.props.clickHandler(fav)}} > 
                  {fav.title }
              </li>
              )

    render() { 
      
        return (
            <div id="favorites-list-container">
              <h3>Favorite Recipes</h3>
              <ul id="list">{this.list()}</ul>
            </div>
        )
    }
  componentDidMount(){
    fetch(`http://localhost:4000/api/v1/users/${this.props.user.user.id}`)
   .then(response => response.json())
   .then(response =>{this.setState({ favArray: response.favorites })
    })
  }
 
}


export default FavoritesList;
