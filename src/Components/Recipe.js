import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        //console.log(this.props.recipe.title)
        return (
            <div>
                <p>{this.props.recipe.title}</p>
                <button>Like</button>
                <button>Instructions</button>
            </div>
        );
    }
}

export default Recipe;
