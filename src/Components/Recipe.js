import React, { Component } from 'react';

class Recipe extends Component {
    render() {  
        return (
            <div className='recipe-div'>
                <p>{this.props.recipe.title}</p>
                <button>Like</button>
                <button>Instructions</button>
            </div>
        );
    }
}

export default Recipe;
