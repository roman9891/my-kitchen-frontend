import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    
    render() {
       
        return (
            <div id='navBar'>
                Logo
                <img src='./logo.png' alt='kitchen logo'></img>
                Avatar
                <NavLink className = "nav-link" to='/profile' exact > 
                    <img id = "nav-bar-avatar" src={this.props.avatar} alt=''></img> Profile &nbsp;
                </NavLink> 
                <NavLink className = "nav-link" to='/' exact> App </NavLink>
            </div>
        );
    }
}

export default NavBar;