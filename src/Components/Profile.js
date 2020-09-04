import React, { Component } from 'react';

class Profile extends Component {
   
    
render() {
 
   fetch('http://localhost:4000/api/v1/profile', {
        method: 'GET',
        headers: {
        Authorization: `Bearer ${this.props.token}`
        }
    })
    .then(response => response.json())
    .then(response => console.dir(response))
            
         return (
            <div>
                 {/* User name from fetch response */}
                 
            </div>
         );
    }
}

export default Profile;
