import React, { Component } from 'react';

class ChangeAvatarForm extends Component {
   
    render() {
        return (
            <div> 
                <form onSubmit = {event => this.props.avatarSubmitHandler(event)}>
                    <input type="text" name="avatar"></input>
                    <input type = "Submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default ChangeAvatarForm;
