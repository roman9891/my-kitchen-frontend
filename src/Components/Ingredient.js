import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        console.log(this.props.ingredient)
        return (
            <div>
                <p>{this.props.ingredient.name}</p>
                <button>use </button>
            </div>
        );
    }
}

export default Ingredient;
