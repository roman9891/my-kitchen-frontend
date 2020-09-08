import React, { Component } from 'react';

 const url = "http://localhost:4000/api/v1/users/"
//  const id = this.props.user.user.id   # I moved this on line 17, because props are not defined outside of Recipe class

class Recipe extends Component {
    state = {
        clicked: false
    }

    clickHandler = () => {
        console.log(`clicked`)
        this.setState({clicked: true}, () => console.log(this.state))
        this.postFavoriteRecipe()
    }

    postFavoriteRecipe = () => {
        
     const id = this.props.user.user.id
    
        const config = {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
                },
            body: JSON.stringify({favorites: this.props.recipe.title})
        }
        fetch(url+id, config)
        .then(r => r.json())
        .then( console.log())
    }


    render() {

        const styleObj= {'color': 'blue'}

        return ( 
            <div className='recipe' style={this.state.clicked ? styleObj : null}>
                <p>{this.props.recipe.title}</p>
                <button onClick={this.clickHandler}>Like</button>
                <button>Instructions</button>
            </div>
        );
    }
}

export default Recipe;
