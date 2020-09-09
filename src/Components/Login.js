import React, { Component } from 'react';

class Login extends Component {

  signUpHandler = event => { event.preventDefault();
      //posting a new user to BACKEND DB. (PS: backeend DB  -  localhost 4000,  because npm runs on 3000)
    let options = { method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
                },
                body: JSON.stringify({
                user: { username: event.target[0].value,
                        password: event.target[1].value,
                        avatar: event.target[2].value
               }
               })
    }
        
  fetch('http://localhost:4000/api/v1/users', options)
  .then(response => response.json())
  window.alert("Thank you for signing up!")
  
  }

    render() {
     
        
        return (
          
            <div id = 'login-component'>
              <h1> Log in</h1>
           <form onSubmit = {event => this.props.loginHandler(event)}>
              <label>User name:</label>
              <input type="text"  name="username"></input> 
              <label>Password:</label>
              <input type="password"  name="password"></input>
              <input type="submit" value="Submit"></input>
              <h4 id = "invalid">{this.props.message}</h4>
           </form> <br></br>

           <h1> Sign up</h1>
           <form onSubmit = {event => this.signUpHandler(event)}>
              <label>User name:</label>
              <input type="text"  name="username"></input> 
              <label>Password:</label>
              <input type="password"  name="password"></input>
              <label>Avatar:</label>
              <input type="text"  name="avatar"></input>
              <input type="submit" value="Submit"></input>
           </form> <br></br>
            </div>
            
        )
    }
    
}

export default Login;
