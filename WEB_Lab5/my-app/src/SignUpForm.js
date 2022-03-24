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
      let months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ]
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
      for (let year = 1900; year < 2022; year++) {
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
          <input type="text" placeholder="Фамилия" />
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Отчество" />
          <div className='line'>
            <input type="radio" name="sex" value="male" className="radioLine" />мужской
            <input type="radio" name="sex" value="female" className="radioLine" id="radioLine2" />женский
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
          <button disabled={this.state.disableBtn} onClick={this.handleBtnClick}>Отправить</button>
        </form>
      )
    }
  }
  