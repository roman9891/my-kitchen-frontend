import React, { Component } from 'react';

class Login extends Component {
  
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
           <form onSubmit = {event => this.props.signUpHandler(event)}>
              <label>User name:</label>
              <input type="text"  name="username"></input> 
              <label>Password:</label>
              <input type="password"  name="password"></input>
              <label>Avatar:</label>
              <input type="text"  name="avatar"></input>
              <input type="submit" value="Submit"></input>
              <h4 id = "invalid">{this.props.error}</h4>
           </form> <br></br>
            </div>
            
        )
    }
    
}

export default Login;
