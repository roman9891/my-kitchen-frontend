import React, { Component } from 'react';

class Profile extends Component {
   
    
render() {
 
//    fetch('http://localhost:4000/api/v1/profile', {
//         method: 'GET',
//         headers: {
//         Authorization: `Bearer ${this.props.token}`
//         }
//     })
//     .then(response => response.json())
//     .then(response => console.dir(response))
            
         return (
            <div> 
               <img id="avatar" src= {this.props.user.user.avatar}></img><br></br>
               <h1> {this.props.user.user.username}</h1> 
               #List of favorites    
            </div>
         );
    }
}

export default Profile;
  