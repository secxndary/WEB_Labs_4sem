import React from "react";
import PropTypes from "prop-types";
import { SignUpEmailInput } from "./SignUpEmailInput";
import { SignUpPasswordInput } from "./SignUpPasswordInput";
import { PhoneInput } from "./PhoneInput.js";

export class SignUpForm extends React.Component {

    state = {
        disableBtn: false,
    };


    disableBtn = (value) => {
        this.setState({ disableBtn: value });
        return this.state.disableBtn;
    };

    day() {
        let days = [];
        for (let day = 1; day < 32; day++) {
            days.push(<option key={day} >{day}</option>);
        }
        return <select defaultValue={12}>{days}</select>;
    }

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month() {
        return (
            <select defaultValue={"August"}>
                {this.months.map((month) => {
                    return <option key={month}>{month}</option>;
                })}
            </select>
        );
    }

    year() {
        let years = [];
        for (let year = 1960; year < 2021; year++) {
            years.push(<option key={year}>{year}</option>);
        }
        return <select defaultValue={2002}>{years}</select>;
    }



    string = "qweqweqw";
    number = Number('111');

    render() {
        return (
            <div>
                <div className="title">@canyaon custom shop.</div>
                <form>
                    <SignUpEmailInput
                        disableBtn={this.disableBtn}
                        disabledBtn={this.state.disableBtn}
                        months={this.months}
                        parentState={this.state}
                        string={this.string}
                        number={this.number} />
                    <SignUpPasswordInput disableBtn={this.disableBtn} />
                    <input type="text" placeholder="First name" />
                    <input name="name" type="text" placeholder="Last name" />
                    <input type="text" placeholder="Patronymic" />
                    <div className="line">
                        <input type="radio" name="gender" value="male" className="radioLine" /> male
                        <input type="radio" name="gender" value="female" className="radioLine" id="radioLine2" /> female
                    </div>
                    <div className="date">
                        {this.day()}
                        {this.month()}
                        {this.year()}
                    </div>
                    <br />
                    <PhoneInput />
                    <br />
                    <button disabled={this.state.disableBtn} onClick={this.handleBtnClick} id="submitButton">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}



SignUpEmailInput.propTypes = {
    disableBtn: PropTypes.func,
    disabledBtn: PropTypes.bool,
    months: PropTypes.array,
    parentState: PropTypes.object,
    string: PropTypes.string,
    number: PropTypes.number
};

SignUpPasswordInput.propTypes = {
    disableBtn: PropTypes.func
}
