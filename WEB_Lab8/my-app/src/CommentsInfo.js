import React from "react";
import { Component } from "react";


export default class CommentsInfo extends Component {
    render() {
        let comment = this.props.comment;
        return (
            <div>
                <div className="name">Имя пользователя: {comment.name}</div>
                <div className="message">E-mail: {comment.email}</div>
                <div className="date">Отредактировано: {comment.date.toLocaleString()}</div>
            </div>
        );
    }
}
