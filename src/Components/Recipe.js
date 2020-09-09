import React, { Component } from 'react';
import {instructions} from '../instructionsData'

 const url = `http://localhost:4000/api/v1/favorites`
 const instruction = instructions[1]

//  const id = this.props.user.user.id   # I moved this on line 19 -- props were not defined outside of Recipe class

class Recipe extends Component {
    state = {
        clicked: false
    }

    parseInstructions = (instructions) => {
        let parsedInstructions = ``
        let ingredientsSet = new Set()

        instructions['steps'].forEach(step => {
            parsedInstructions += `${step['number']}: ${step['step']} \n`
            step['ingredients'].forEach(ingredient => ingredientsSet.add(ingredient.name))
        })
        
        return [parsedInstructions,[...ingredientsSet]]
    }

    clickHandler = () => {
        console.log(this.props.recipe)
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
            body: JSON.stringify({
                title: this.props.recipe.title,
                user_id: id,
                ingredients: ``,
                instructions: "will be soon"
             })
        }
        
        fetch(url, config)
        .then(r => r.json())
        .then(console.log)
    }


    render() {
        console.log(this.parseInstructions(instruction))

        const styleObj= {'color': 'blue'}

        return (
            <div className='recipe' style={this.state.clicked ? styleObj : null}>
                <img src={this.props.recipe.image}></img>
                <p>{this.props.recipe.title}</p>
                <button onClick={this.clickHandler}>Like</button>
                <button>Instructions</button>
            </div>
        );
    }
}

export default Recipe;
