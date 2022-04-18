import React from "react";
import { Component } from "react";
import CommentsDel from "./CommentsDel";
import CommentsEdit from "./CommentsEdit";
import CommentsInfo from "./CommentsInfo";

export class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: "/avatars/default.png",
            comments: [
                {
                    name: "Гриффит",
                    avatar: "/avatars/griffith2.jpg",
                    email: "best_leader_ever1337@mail.ru",
                    message: "Настоящий друг — тот, кто живет своей мечтой.",
                    secretWord: "beherit",
                    date: new Date(),
                },
                {
                    name: "Гатс",
                    avatar: "/avatars/guts.jpg",
                    email: "berserk_berserk@mail.ru",
                    message: "Что вершит судьбу человечества в этом мире?",
                    secretWord: "kaska",
                    date: new Date(),
                },
                {
                    name: "Каска",
                    avatar: "/avatars/kaska.jpg",
                    email: "top_girl228@mail.ru",
                    message: "Мальчики ну не ссорьтесь",
                    secretWord: "guts",
                    date: new Date(),
                },
            ],
            delete: null,
            edit: null,
            info: null,
        };
    }

    avatars = [
        {
            img: "/avatars/default.png",
            name: "Выберите фото",
        },
        {
            img: "/avatars/guts.jpg",
            name: "Гатс",
        },
        {
            img: "/avatars/griffith2.jpg",
            name: "Гриффит",
        },
        {
            img: "/avatars/kaska.jpg",
            name: "Каска",
        },
        {
            img: "/avatars/images.jpg",
            name: "Длань Господа",
        },
        {
            img: "/avatars/femto2.png",
            name: "Фемто",
        },
    ];


    onSubmit = (e) => {
        e.preventDefault();
        let comment = {
            name: this.name.value,
            avatar: this.state.img,
            email: this.email.value,
            message: this.message.value,
            secretWord: this.secretWord.value,
            date: new Date(),
        };
        this.setState({
            comments: [...this.state.comments, comment],
        });
        this.name.value = null;
        this.email.value = null;
        this.message.value = null;
        this.secretWord.value = null;
    };


    comments() {
        return this.state.comments.map((comment) => {
            return (
                <div className="comment" key={comment.message}>
                    <button onClick={() => this.setState({ edit: comment, delete: null, info: null })}>Ред.</button>
                    {comment === this.state.edit ?
                        <CommentsEdit
                            comment={this.state.edit}
                            editComment={this.editComment}
                        />
                        : null}
                    <button onClick={() => this.setState({ delete: comment, edit: null, info: null })}>
                        Удалить
                    </button>
                    {comment === this.state.delete ? (
                        <CommentsDel
                            deleteComment={this.deleteComment}
                            comment={this.state.delete}
                        />
                    ) : null}
                    <button onClick={() => this.setState({ info: comment, edit: null, delete: null })}>Инфо</button>
                    {comment === this.state.info ? (
                        <CommentsInfo comment={this.state.info} />
                    ) : null}
                    <div className="commentContainer">
                        <img
                            style={{ height: "45px", width: "45px" }}
                            src={comment.avatar}
                            alt="" />
                        <div className="commentText">
                            <div className="name">{comment.name}</div>
                            <div className="message">{comment.message}</div>
                        </div>
                    </div>

                </div>
            );
        });
    }


    deleteComment = (comment) => {
        for (let i = 0; i < this.state.comments.length; i++) {
            if (this.state.comments[i] === comment) {
                return this.setState(({ comments }) => ({
                    comments: [...comments.slice(0, i), ...comments.slice(i + 1)],
                    delete: null
                }));
            }
        }
    };


    editComment = (comment, text) => {
        for (let i = 0; i < this.state.comments.length; i++) {
            if (this.state.comments[i] === comment) {
                comment.message = text;
                comment.date = new Date();
                return this.setState(({ comments }) => ({
                    comments: [...comments.slice(0, i), comment, ...comments.slice(i + 1)],
                    edit: null
                }));
            }
        }
    }



    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        ref={(e) => (this.name = e)}
                        type="text"
                        placeholder="Имя пользователя"
                        name="name" />
                    <select onChange={(e) => this.setState({ img: e.target.value })}>
                        {this.avatars.map((avatar) => {
                            return (
                                <option key={avatar.img} value={avatar.img}>
                                    {avatar.name}
                                </option>
                            );
                        })}
                    </select>
                    <img
                        style={{ height: "70px", width: "70px" }}
                        src={this.state.img}
                        alt="" />
                    <input
                        ref={(e) => (this.email = e)}
                        type="email"
                        name="email"
                        placeholder="E-mail" />
                    <textarea placeholder="Комментарий" ref={(e) => (this.message = e)} />
                    <input
                        ref={(e) => (this.secretWord = e)}
                        type="text"
                        placeholder="Секретное слово" />
                    <input type="submit" value="Отправить" />
                </form>
                {this.comments()}
            </div>
        );
    }
}