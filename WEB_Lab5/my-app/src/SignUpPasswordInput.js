import React, { Component } from 'react';



export class SignUpPasswordInput extends Component {
    state = {
        password: "",
        disableBtn: true,
        showMessage: false
    };

    showMessage = (value) => {
        this.setState.showMessage(value);
        return this.state.showMessage;
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    handleRepeat = (e) => {
        this.state.password === e.target.value
            ? this.setState({ disableBtn: false, showMessage: false },
                () => this.props.disableBtn(this.state.disableBtn)
            )
            : this.setState({ disableBtn: true, showMessage: true }, () =>
                this.props.disableBtn(this.state.disableBtn)
            );
    };
    checkPassword() {
        let password = this.state.password,
            check = 0,
            width = "0%";
        if (password.match(/\d/g)) check++;
        if (password.match(/[a-z]/g)) check++;
        if (password.match(/[A-Z]/g)) check++;
        if (password.match(/\W/g)) check++;
        if (!password.length) width = "0%";
        else if (password.length < 6 && check < 3) width = "33%";
        else if (password.length < 6 && check >= 3) width = "66%";
        else if (password.length >= 8 && check < 3) width = "66%";
        else if (password.length >= 8 && check >= 3) width = "100%";
        else if (password.length >= 6 && check === 1) width = "33%";
        else if (password.length >= 6 && check > 1 && check < 4) width = "66%";
        else if (password.length >= 6 && check === 4) width = "100%";
        return (
            <div className="password">
                <div className="password1" style={{ width: width }} />
            </div>
        );
    }
    render() {
        {
            return this.state.showMessage ?
                (
                    <div>
                        <input
                            type="password"
                            placeholder="Enter password"
                            onChange={this.handlePassword}
                        />
                        {this.checkPassword()}
                        <input
                            type="password"
                            placeholder="Repeat password"
                            onChange={this.handleRepeat}
                        />
                        <div className="notMatch">Passwords don't match.</div>
                    </div>
                )
                :
                (
                    <div>
                        <input
                            type="password"
                            placeholder="Enter password"
                            onChange={this.handlePassword}
                        />
                        {this.checkPassword()}
                        <input
                            type="password"
                            placeholder="Repeat password"
                            onChange={this.handleRepeat}
                        />
                    </div>
                );
        }
    }
}
