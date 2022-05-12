import React from 'react'
import { store } from "../index"

export class SignInForm extends React.Component {
    state = {
        password: null,
        login: null
    }
    changeHandler(e, target) {
        this.setState({ [target]: e.target.value })
    }
    handleClick = (e) => {
        e.preventDefault();
        if (this.state.login === store.getState().login && this.state.password === store.getState().password)
            this.props.in(true)
    }
    render() {
        return (
            <div className="sign_in">
                <p>E-mail</p>
                <input type="text" onChange={(e) => this.changeHandler(e, "login")} />
                <p>Password</p>
                <input type="password" onChange={(e) => this.changeHandler(e, "password")} />
                <button onClick={this.handleClick}>Send</button>
            </div>
        )
    }
}