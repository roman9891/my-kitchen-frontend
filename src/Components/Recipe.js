import React, { Component } from 'react';

const url = `` //locahost:4000/users/??
const id = `` //obtained from token??

class Recipe extends Component {
    state = {
        clicked: false
    }

    clickHandler = () => {
        console.log(`clicked`)
        this.setState({clicked: true}, () => console.log(this.state))
        //this.postFavoriteRecipe()
    }

    postFavoriteRecipe = () => {
        const config = {
            method: `POST`,
            headers: {},
            body: JSON.stringify(this.props.recipe)
        }

        fetch(`${url}${id}`, config)
        .then(r => r.json())
        .then(console.log)
    }


    render() {

        const styleObj= {'color': 'blue'}

        return (
            <div style={this.state.clicked ? styleObj : null}>
                <p>{this.props.recipe.title}</p>
                <button onClick={this.clickHandler}>Like</button>
                <button>Instructions</button>
            </div>
        );
    }
}

export default Recipe;
