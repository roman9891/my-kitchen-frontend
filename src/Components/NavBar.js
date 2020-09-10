import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    
    render() {
       
        return (
            <div>
                <NavLink className = "nav-link" to='/profile' exact > <img id = "nav-bar-avatar" src={this.props.avatar}></img> Profile &nbsp;</NavLink>   
                <NavLink className = "nav-link" to='/' exact> App </NavLink>
            </div>
        );
    }
}

export default NavBar;