import React from "react";

export class StudentInfoHandler extends React.Component {

    constructor(props) {
        super(props);
        this.handlerFirstProps = null;
        this.handlerSecondProps = null;
        this.handlerThirdProps = null;
        this.handlerMail = null;
        this.handlerTelephone = null;
    }


    age(day, month, year) {

        let intMonth = 0;
        switch (month) {
            case "January": intMonth = 0; break;
            case "February": intMonth = 1; break;
            case "March": intMonth = 2; break;
            case "April": intMonth = 3; break;
            case "May": intMonth = 4; break;
            case "June": intMonth = 5; break;
            case "July": intMonth = 6; break;
            case "August": intMonth = 7; break;
            case "September": intMonth = 8; break;
            case "October": intMonth = 9; break;
            case "November": intMonth = 10; break;
            case "December": intMonth = 11; break;
        }
        console.log('def month: ' + month + ' day: ' + day + ' month: ' + intMonth + ' year: ' + year)

        let currentDate = new Date(), age = currentDate.getFullYear() - year;
        if (currentDate.getMonth() < intMonth) --age;
        else if (currentDate.getDate() < day) --age;
        console.log(age);
        return age;
    }

    course(student) {
        let currentDate = new Date(),
            course = currentDate.getFullYear() - student;
        if (currentDate.getMonth() > 8) course++;
        if (student === "") course = "";
        if (course > 4) course = "Graduated";
        console.log('student = ' + student);
        return course;
    }

    mailOperator(student) {
        console.log('props mail in mailOP:' + this.props.handlerMail);
        return student.split("@")[1];
    }

    phoneOperator(student) {
        let operators = [
            {
                name: "A1",
                code: 29,
                firstNumber: [1, 3, 6, 9],
            },
            {
                name: "МТС",
                code: 29,
                firstNumber: [2, 5, 7, 8],
            },
            {
                name: "A1",
                code: 44,
            },
            {
                name: "МТС",
                code: 33,
            },
            {
                name: "life :)",
                code: 25,
            },
            {
                name: "City",
                code: 17,
            },
        ],
            phone = student,
            position,
            code,
            operator;
        if (phone[0] === "+") position = 4;
        if (phone[0] === "8") position = 2;
        code = +phone.slice(position, position + 2);

        operators.map((item) => {
            if (item.code === code && code === 29) {
                let firstNum = +phone.slice(position + 2, position + 3);
                for (let i = 0; i < item.firstNumber.length; i++) {
                    if (firstNum === item.firstNumber[i]) {
                        return operator = item.name;
                    }
                }
            }
            else if (item.code === code)
                return operator = item.name;
        });
        return operator;
    }


    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>First name</td>
                            <td>{this.props.handlerFirstProps}</td>
                        </tr>
                        <tr>
                            <td>Last name</td>
                            <td>{this.props.handlerSecondProps}</td>
                        </tr>
                        <tr>
                            <td>Patronymic</td>
                            <td>{this.props.handlerThirdProps}</td>
                        </tr>
                        <tr>
                            <td>Faculty</td>
                            <td>{this.props.handlerFac}</td>
                        </tr>
                        <tr>
                            {/* {this.props.handlerCourse} */}
                            <td>Course</td>
                            <td>{this.course(this.props.handlerStart)}</td>
                        </tr>
                        <tr>
                            <td>Group</td>
                            <td>{this.props.handlerGroup}</td>
                        </tr>
                        <tr>
                            <td>Speciality</td>
                            <td>{this.props.handlerSpec}</td>
                        </tr>
                        <tr>
                            <td>Birtday</td>
                            <td>{this.props.handlerDay} {this.props.handlerMonth} {this.props.handlerYear}</td>
                        </tr>
                        <tr>
                            {/* {2022 - this.props.handlerYear} */}
                            <td>Current age</td>
                            <td>{this.age(this.props.handlerDay, this.props.handlerMonth, this.props.handlerYear)}</td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td>{this.props.handlerMail}</td>
                        </tr>
                        <tr>
                            <td>E-mail operator</td>
                            <td>{this.mailOperator(this.props.handlerMail)}</td>
                        </tr>
                        <tr>
                            <td>Telephone</td>
                            <td>{this.props.handlerTelephone}</td>
                        </tr>
                        <tr>
                            <td>Telephone operator</td>
                            <td>{this.phoneOperator(this.props.handlerTelephone)}</td>
                        </tr>
                    </tbody>
                </table> {console.log('handler state mail:' + this.props.handlerMail)}
            </div>);
    }
}
