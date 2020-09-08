import React, { Component, Fragment } from 'react';
import Login from "../Components/Login"
import App from '../App';
class LoginContainer extends Component {
    state={
        response:"",
        
      }
    loginHandler = event => {event.preventDefault(); 
       
        let options = { method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                    },
                    body: JSON.stringify({
                          user:  {username: event.target[0].value,
                                 password: event.target[1].value,
                                 }
                    })
        }
            
      fetch('http://localhost:4000/api/v1/login', options)  // got toket in response !
      .then(response => response.json())
      .then(resp => { this.setState({response: resp
                                       })
                        }
           )                    
      }
    render() {
        if (this.state.response.user)  {
            return (<Fragment> <App user = {this.state.response}/> </Fragment>
        )}
        if (this.state.response.message)  {
            return ( 
                    <Fragment> <Login loginHandler = {this.loginHandler} message = {this.state.response.message}/> </Fragment> 
        )}
        if (this.state.response ==="" )  {
            return (<Fragment><Login loginHandler = {this.loginHandler}/></Fragment>
        )}
                
    }   
}


export default LoginContainer;
