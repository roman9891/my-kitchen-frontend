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
        console.log(this.props.ingredient.image)
        return (
            <div >
                <img src={this.props.ingredient.image} alt=''></img>
                <button className='ingredient' onClick={this.clickHandler}>{this.props.ingredient.name}</button>
            </div>
        );
    }
}

export default Ingredient;
