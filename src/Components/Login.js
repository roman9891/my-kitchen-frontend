import React, { Component } from 'react';

class Login extends Component {
  
    render() {
     
        return (
          
            <div id = 'login-component'>
              <img id='login-logo' src='https://www.freelogodesign.org/file/app/client/thumb/7491f520-10aa-41e7-9c5c-4b2fe3d2954d_200x200.png?1599825946859'></img>
              <p>Log in</p>
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
              <p> Sign up</p>
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
