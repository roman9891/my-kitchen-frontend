import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        return (
            <div>
                <p>{this.props.ingredient.title}</p>
                <button>save</button>
            </div>
        );
    }
}

export default Ingredient;
