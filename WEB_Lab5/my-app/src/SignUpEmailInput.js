import React, { Component } from 'react';


export class SignUpEmailInput extends Component {
    state = {
        email: ""
    };

    inputHandler = (e) => {
        this.setState({ email: e.target.value });
        let regex = /\S+@\S+\.\S+/,
            checked = regex.test(e.target.value);
        this.props.disableBtn(!checked);
    };

    render() {
        return (
            <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.inputHandler}
            />
        );
    }
}
