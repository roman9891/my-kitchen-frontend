import React, { Component } from 'react';

class Ingredient extends Component {
    state = {
        clicked: false
    }
    clickHandler = (e) => {
        this.setState({clicked: true})
        this.props.appHandler(this.props.ingredient.name)
    }
    
    render() {
        return (
            <div>
                <p>{this.props.ingredient.name}</p>
                <button onClick={this.clickHandler}>use</button>
            </div>
        );
    }
}

export default Ingredient;
