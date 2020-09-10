import React, { Component } from 'react';
import UsedItem from './UsedItem'

class UsedList extends Component {
    
    renderUsed = () => this.props.usedItems.map((item,i) => <UsedItem key={i} item={item} removeHandler={this.props.removeHandler}/>)
    
    render() {
        return (
            <div id='used-list'>
                ingredients: {this.renderUsed()}
            </div>
        );
    }
}

export default UsedList;
