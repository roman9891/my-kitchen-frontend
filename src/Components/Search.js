import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: ``
    }

    changeHandler = e => {
        this.setState({search: e.target.value}, () => console.log(this.state))
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(`submit`)
        this.props.searchHandler(this.state)
    }

    //

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input  
                        type="text"
                        placeholder={"Search for ingredients"}
                        onChange={this.changeHandler}
                        value={this.state.search}
                    />
                    <button type='submit'>search</button>
                </form>  
            </div>
            
        );
    }
}

export default Search;
