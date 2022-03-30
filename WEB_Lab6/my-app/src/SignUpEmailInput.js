import React, { Component } from 'react';


export class SignUpEmailInput extends Component {
    constructor(props) {
        super(props);
        this.mailOutput = null;
    }

    state = {
        email: ""
    };

    inputHandler = (e) => {
        this.setState({ email: e.target.value });
        let regex = /\S+@\S+\.\S+/,
            checked = regex.test(e.target.value);
        this.props.disableBtn(!checked);
        // console.log('state from handler: ' + this.state.email)
        // this.props.updateMail(this.state.email)
    };

    inputMail = (e) => {
        // this.setState({ email: e.target.value });
        this.props.updateMail(e.target.value);
        console.log('state from inputMail: ' + e.target.value)

    }

    render() {
        return (
            <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.inputHandler}
                onInput={this.inputMail}
            />
        );
    }
}
