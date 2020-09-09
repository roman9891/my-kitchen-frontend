import React, { Component } from 'react';




class FavoritesList extends Component {
   
  state={
      favArray:[]
  }
    
 list = () => this.state.favArray.map((fav) => 
              <li key={fav.id} 
                  onClick = { () => {this.props.clickHandler(fav)}} > 
                  {fav.title }
              </li>
              )

        // <Favorite key = {fav.id} recipe = {fav}/>
    render() { 
      
        return (
            <div id="favorites-list-container">
            <h3>My favorite recipes</h3>
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

// fetch( url +`${this.props.user.user.id}`, {
//     method: 'GET',
//     headers: {
//     Authorization: `Bearer ${this.props.user.jwt}`
//     }
// //  }) {this.setState({
//     favArray: response
// })
