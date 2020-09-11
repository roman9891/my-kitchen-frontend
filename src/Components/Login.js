import React, { Component } from 'react';

class Login extends Component {
  
    render() {
     
        return (
          
            <div id = 'login-component'>
              <h1> Log in</h1>
              {/* <br/> */}
              <form onSubmit = {event => this.props.loginHandler(event)}>
                <label>User name:</label>
                <br/>
                <input type="text"  name="username"></input>
                <br/>
                <label>Password:</label>
                <br/>
                <input type="password"  name="password"></input>
                <br/><br/>
                <div className="buttonHolder">
                  <input id='login-btn' className='login-btns' type="submit" value="Submit"></input>
                </div>
              </form>
              <h4 id = "invalid">{this.props.message}</h4>
              <br/>
              <h1> Sign up</h1>
              <form onSubmit = {event => this.props.signUpHandler(event)}>
                  <label>User name:</label>
                  <br/>
                  <input type="text"  name="username"></input>
                  <br/>
                  <label>Password:</label>
                  <br/>
                  <input type="password"  name="password"></input>
                  <br/>
                  <label>Avatar:</label>
                  <br/>
                  <input type="text"  name="avatar"></input>
                  <br/><br/>
                  <div className="buttonHolder">
                    <input id='signup-btn' className='login-btns' type="submit" value="Submit"></input>
                  </div>
                  <h4 id = "invalid">{this.props.error}</h4>
              </form> <br></br>
            </div>
        )
    }
    
}

export default Login;
