import React, { Component } from 'react';
import './index.css';
import { PhoneInput } from './PhoneInput';
import { SignUpPasswordInput } from './SignUpPasswordInput';
import { SignUpEmailInput } from './SignUpEmailInput';
import { StudentInfo } from './StudentInfo';




export class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.firstRef = null;
        this.secondRef = null;
        this.thirdRef = null;

    }

    state = {
        disableBtn: false,
        firstName: "",
        secondName: "",
        thirdName: "",
        mail: "",
        password: "",
        telephone: ""
    }

    handleBtnClick = (e) => {
        e.preventDefault();

        this.setState({
            firstName: this.firstRef.value,
            secondName: this.secondRef.value,
            thirdName: this.thirdRef.value,
        });


        console.log('refs:');
        console.log(this.firstRef.value);
        console.log(this.secondRef.value);
        console.log(this.thirdRef.value);
        console.log('state:');
        console.log(this.state.firstName);
        console.log(this.state.secondName);
        console.log(this.state.thirdName);
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
            <select defaultValue={12}>
                {days}
            </select>
        )
    }

    month() {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return (
            <select defaultValue={"August"}>
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
            <select defaultValue={2002}>
                {years}
            </select>
        )
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="First name" ref={ref => this.firstRef = ref} />
                <input type="text" placeholder="Last name" ref={ref => this.secondRef = ref} />
                <input type="text" placeholder="Patronymic" ref={ref => this.thirdRef = ref} />
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



// export class DataTransfer extends Component {
//     render() {
//         return(
//             <SignUpForm firstRef={this.state.firstName}/>
//         );
//     }
// }
