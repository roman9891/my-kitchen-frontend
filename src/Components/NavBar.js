import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink className = "nav-link" to='/profile' exact > Prof </NavLink>
                <NavLink className = "nav-link" to='/' exact> App </NavLink>
            </div>
        );
    }
}

export default NavBar;
