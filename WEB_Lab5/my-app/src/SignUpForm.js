import React, { Component } from 'react';
import './index.css';
import { PhoneInput } from './PhoneInput';
import { SignUpPasswordInput } from './SignUpPasswordInput';
import { SignUpEmailInput } from './SignUpEmailInput';




export class SignUpForm extends Component {
    state = {
        disableBtn: false,
    }
    disableBtn = (value) => {
        this.setState({ disableBtn: value })
        return this.state.disableBtn
    }

    day() {
        let days = []
        for (let day = 1; day < 32; day++) {
            days.push(
                <option key={day}>{day}</option>
            )
        }
        return (
            <select>
                {days}
            </select>
        )
    }

    month() {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return (
            <select>
                {months.map(month => {
                    return <option key={month}>{month}</option>
                })}
            </select>
        )
    }

    year() {
        let years = []
        for (let year = 1930; year < 2022; year++) {
            years.push(
                <option key={year}>{year}</option>
            )
        }
        return (
            <select>
                {years}
            </select>
        )
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Patronymic" />
                <div className="line">
                    <input type="radio" name="sex" value="male" className="radioLine" />male
                    <input type="radio" name="sex" value="female" className="radioLine" id="radioLine2" />female
                </div>
                <SignUpEmailInput disableBtn={this.disableBtn} />
                <SignUpPasswordInput disableBtn={this.disableBtn} />
                <div >
                    {this.day()}
                    {this.month()}
                    {this.year()}
                </div>
                <br />
                <PhoneInput />
                <br />
                <button disabled={this.state.disableBtn} onClick={this.handleBtnClick}>Submit</button>
            </form>
        )
    }
}
