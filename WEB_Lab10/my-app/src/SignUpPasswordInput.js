import React from "react";

export class SignUpPasswordInput extends React.Component {
    state = {
        password: "",
        disableBtn: true,
    };
    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    };

    handleRepeat = (e) => {
        this.state.password === e.target.value
            ? this.setState({ disableBtn: false }, () =>
                this.props.disableBtn(this.state.disableBtn)
            )
            : this.setState({ disableBtn: true }, () =>
                this.props.disableBtn(this.state.disableBtn)
            );
    };
    checkPassword() {
        let check = 0,
            text;
        if (this.state.password.match(/\d/g) || this.state.password.match(/[a-z]/g))
            check++;
        if (this.state.password.match(/[A-Z]/g)) check++;
        if (this.state.password.match(/\W/g)) check++;
        switch (check) {
            case 0:
                return (text = "Password is empty");
            case 1:
                if (this.state.password.length > 7) return (text = "Strong password");
                return (text = "Unreliable password");
            case 2:
                if (this.state.password.length > 5) return (text = "Strong password");
                return (text = "Unreliable password");
            case 3:
                if (this.state.password.length > 5)
                    return (text = "Very strong password");
                return (text = "Unreliable password");
        }
        return <div>{text}</div>;
    }
    render() {
        return (
            <>
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
            </>
        );
    }
}
