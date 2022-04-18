import React from "react";
import { Component } from "react";

export default class CommentsDel extends Component {
    onSubmit = (e) => {
        e.preventDefault()
        if (this.yourWord.value === this.props.comment.secretWord) {
            return this.props.deleteComment(this.props.comment);
        }
        alert("Ошибка: Неверное секретное слово!")
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    ref={(e) => (this.yourWord = e)}
                    placeholder="Секретное слово"
                />
                <input type="submit" value="Подтвердить" />
            </form>
        );
    }
}