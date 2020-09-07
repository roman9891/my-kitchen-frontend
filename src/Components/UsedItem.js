import React, { Component } from 'react';

class UsedItem extends Component {
    
    clickHandler = () => {
        console.log(`cliked`)
        this.props.removeHandler(this.props.item)
    }
    
    render() {
        return (
            <button onClick={this.clickHandler}>
                {this.props.item}
            </button>
        );
    }
}

export default UsedItem;
