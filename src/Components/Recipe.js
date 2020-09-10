import React, { Component } from 'react';
import {instructions} from '../instructionsData'

 const url = `http://localhost:4000/api/v1/favorites`
 const instruction = instructions[1]

//  const id = this.props.user.user.id   # I moved this on line 19 -- props were not defined outside of Recipe class

class Recipe extends Component {
    state = {
        liked: false,
        instructions: false,
        steps: ``,
        ingredients: ``
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

    clickHandler = (e) => {
        
        if (e.target.matches(`#like-btn`)) {
            this.setState({liked: true}, () => console.log(this.state))
            this.postFavoriteRecipe()
        }
        
        if (e.target.matches(`#instructions-btn`)) {
            this.setState({instructions: !this.state.instructions}, () => console.log(this.state))
            if (this.state.steps === ``) {this.fetchInstructions(this.props.recipe.id)}
        }
    }

    fetchInstructions = id => {
        fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=81b17e72c9484724a29239484ef6b188`)
        .then(r => r.json())
        .then(instructionsArray => {
            instructionsArray.forEach(instructionsObject => this.setState({
                steps: this.parseInstructions(instructionsObject)[0],
                ingredients: this.parseInstructions(instructionsObject)[1]
            }, () => console.log(`from fetch: `,this.state)))
        })
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
        //console.log(`recipe render`)

        const styleObj= {'color': 'blue'}

        return (
            <div className='recipe' style={this.state.liked ? styleObj : null}>
                <img src={this.props.recipe.image}></img>
                <p>{this.props.recipe.title}</p>
                
                <button id='instructions-btn' onClick={this.clickHandler}>Instructions</button>
                {this.state.instructions ? <p><button id='like-btn' onClick={this.clickHandler}>Like</button>{this.state.steps}</p> : null}
            </div>
        );
    }
}

export default Recipe;
