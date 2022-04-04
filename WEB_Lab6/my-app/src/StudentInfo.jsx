import React from "react";
import './index.css';
import { PhoneInput } from './PhoneInput';
import { SignUpPasswordInput } from './SignUpPasswordInput';
import { SignUpEmailInput } from './SignUpEmailInput';
import { StudentInfoHandler } from "./StudentInfoHandler";


export class StudentInfo extends React.Component {

    constructor(props) {
        super(props);
        this.firstRef = null;
        this.secondRef = null;
        this.thirdRef = null;
        this.dayRef = null;
        this.monthRef = null;
        this.yearRef = null;
        this.facRef = null;
        this.startRef = null;
        this.groupRef = null;
        this.specRef = null;
    }

    state = {
        disableBtn: false,
        firstName: "Valdaitsev",
        secondName: "Alexander",
        thirdName: "Denisovich",
        mail: "valdaitsevv@mail.ru",
        password: null,
        telephone: "+375445573500",
        day: 12,
        month: "August",
        year: 2002,
        faculty: "FIT",
        start: 2020,
        group: 5,
        speciality: "POIT"
    }



    handleBtnClick = (e) => {
        e.preventDefault();

        this.setState({
            firstName: this.firstRef.value,
            secondName: this.secondRef.value,
            thirdName: this.thirdRef.value,
            day: this.dayRef.value,
            month: this.monthRef.value,
            year: this.yearRef.value,
            faculty: this.facRef.value,
            start: this.startRef.value,
            group: this.groupRef.value,
            speciality: this.specRef.value
        });

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
            <select defaultValue={12} ref={ref => this.dayRef = ref}>
                {days}
            </select>
        )
    }

    month() {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return (
            <select defaultValue={"August"} ref={ref => this.monthRef = ref}>
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
            <select defaultValue={2002} ref={ref => this.yearRef = ref}>
                {years}
            </select>
        )
    }

    updateMail = (value) => {
        this.setState({ mail: value })
    }

    updateTelephone = (value) => {
        this.setState({ telephone: value })
    }


    render() {
        return (
            <div className="mainContainer">
                <div>
                    <form>
                        <input type="text" placeholder="First name" ref={ref => this.firstRef = ref} />
                        <input type="text" placeholder="Last name" ref={ref => this.secondRef = ref} />
                        <input type="text" placeholder="Patronymic" ref={ref => this.thirdRef = ref} />
                        <input type="text" placeholder="Faculty" ref={ref => this.facRef = ref} />
                        <input type="text" placeholder="Year of admission" ref={ref => this.startRef = ref} />
                        <input type="text" placeholder="Group" ref={ref => this.groupRef = ref} />
                        <input type="text" placeholder="Speciality" ref={ref => this.specRef = ref} />
                        <SignUpEmailInput disableBtn={this.disableBtn} updateMail={this.updateMail} />
                        <SignUpPasswordInput disableBtn={this.disableBtn} />
                        <div className="fix">
                            {this.day()}
                            {this.month()}
                            {this.year()}
                        </div>
                        <PhoneInput updateTelephone={this.updateTelephone} />
                        <br />
                        <button disabled={this.state.disableBtn} onClick={this.handleBtnClick}>Submit</button>
                    </form>
                </div>

                <div>
                    <StudentInfoHandler 
                        handlerFirstProps={this.state.firstName}
                        handlerSecondProps={this.state.secondName}
                        handlerThirdProps={this.state.thirdName}
                        handlerMail={this.state.mail}
                        handlerTelephone={this.state.telephone}
                        handlerDay={this.state.day}
                        handlerMonth={this.state.month}
                        handlerYear={this.state.year}
                        handlerFac={this.state.faculty}
                        handlerStart={this.state.start}
                        handlerGroup={this.state.group}
                        handlerSpec={this.state.speciality}
                    />
                </div>
            </div>


        )
    }
}
