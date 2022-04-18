import React from "react";
import { Component } from "react";

export default class CommentsEdit extends Component {
    onSubmit = e => {
        e.preventDefault()
        this.props.editComment(this.props.comment, this.yourComment.value)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="name">Пользователь: {this.props.comment.name}</div>
                <div className="message">Email: {this.props.comment.email}</div>
                <textarea ref={(e) => (this.yourComment = e)} defaultValue={this.props.comment.message} />
                <input type="submit" value="Подтвердить" />
            </form>
        )
    }
}