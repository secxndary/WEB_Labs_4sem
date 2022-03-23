import React, { Component } from 'react';
import * as calendar from './calendar';
import classnames from 'classnames';
import './index.css';


export default class Calendar extends Component {

    static defaultProps = {
        date: new Date(),
        years: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };


    handlePrevMonthButtonClick = () => {
        const date = new Date(this.state.date.getFullYear(), this.state.date.getMonth() - 1);
        console.log(date);
        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1);
        console.log(date);
        this.setState({ date });
    };

    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;
        const date = new Date(year, month);
        console.log(date);
        this.setState({ date });
    };

    handleDayClick = date => {
        console.log(date);
        this.setState({ selectedDate: date })
        this.props.onChange(date);
    };



    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;
        const monthData = calendar.getMonthData(this.state.date.getFullYear(), this.state.date.getMonth());


        return (
            <div className='calendar'>
                {/* HEAD */}
                <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

                    <select
                        ref={element => this.monthSelect = element}
                        onChange={this.handleSelectChange}
                        value={this.state.date.getMonth()}>
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select
                        ref={element => this.yearSelect = element}
                        onChange={this.handleSelectChange}
                        value={this.state.date.getFullYear()}>
                        {years.map(year =>
                            <option key={year} value={year}>{year}</option>
                        )}
                    </select>

                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>
                            {weekDayNames.map(name =>
                                <th key={name}>{name}</th>
                            )}
                        </tr>
                    </thead>


                    {/* BODY */}
                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className='week'>
                                {week.map((date, index) =>
                                    <td
                                        key={index}
                                        className={classnames('day', {
                                            'today': calendar.areEqual(date, new Date()),
                                            'selected': calendar.areEqual(date, selectedDate),
                                            'another': calendar.anotherMonth(date, new Date(this.state.date.getFullYear(), this.state.date.getMonth(), this.state.date.getDate()))
                                        })}
                                        onClick={() => this.handleDayClick(date)}>
                                        {date.getDate()}
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}