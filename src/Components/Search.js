import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
              <input  type="text"
                      placeholder={"Search for ingredients"}
                      onChange={event => {this.props.searchHandler(event)
                     }}
              />
            </div>
            
        );
    }
}

export default Search;
