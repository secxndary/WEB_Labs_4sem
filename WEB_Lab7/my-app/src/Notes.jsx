import React from "react";
import "./Notes.css";

export class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            date: null,
            desc: "",
            notes: [],
            edit: null,
        };
    }

    style(length) {
        if (length > 8) {
            return { background: "#ff3d3d" };
        }
        return { background: "#fdff99" };
    }

    handle = (target, e) => {
        this.setState({ [target]: e.target.value });
    };

    addNote = () => {
        this.setState(
            {
                notes: [
                    ...this.state.notes,
                    {
                        title: this.state.title,
                        date: this.props.date.toLocaleDateString(),
                        desc: this.state.desc,
                    },
                ],
                title: "",
                date: this.state.date,
                desc: "",
            },
            () => this.props.addNote(this.state.notes)
        );
    };

    deleteFirst = () => {
        this.setState(
            {
                notes: this.state.notes.slice(1, this.state.notes.length),
            },
            () => this.props.addNote(this.state.notes)
        );
    };

    deleteLast = () => {
        this.setState(
            {
                notes: this.state.notes.slice(0, this.state.notes.length - 1),
            },
            () => this.props.addNote(this.state.notes)
        );
    };

    deleteAll = () => {
        this.setState({ notes: [] }, () => this.props.addNote(this.state.notes));
        this.props.deleteAllNotes();
    };


    form() {
        if (this.props.showForm)
            return (
                <div className="form">
                    <form>
                        <input
                            type="text"
                            placeholder="Enter title"
                            onChange={this.handle.bind(this, "title")}
                            value={this.state.title} />
                        <input
                            type="text"
                            placeholder="date"
                            readOnly
                            value={this.props.date.toLocaleDateString()} />
                        <textarea
                            placeholder="Start writing..."
                            onChange={this.handle.bind(this, "desc")}
                            value={this.state.desc} />
                    </form>
                    <button onClick={this.addNote} className="add">Add</button>
                </div>
            );
    }


    edit = (note, newNote) => {
        for (let i = 0; i < this.state.notes.length; i++) {
            if (this.state.notes[i] === note) {
                return this.setState(({ notes }) => ({
                    notes: [...notes.slice(0, i), newNote, ...notes.slice(i + 1)],
                    edit: null,
                }));
            }
        }
    };



    render() {
        let length = 0;
        return (
            <div>
                {this.form()}
                {this.state.notes.length > 0 && (
                    <div>
                        <button onClick={this.deleteFirst} className="delete">Delete first</button>
                        <button onClick={this.deleteLast} className="delete">Delete last</button>
                        <button onClick={this.deleteAll} className="delete">Delete all</button>
                    </div>
                )}
                {this.state.notes.map((item) => {
                    length++;
                    return (
                        <div
                            key={item.title + item.date}
                            className="notes"
                            style={this.style(length)}>

                            <p>{length > 7 && "Too much notes!"}</p>
                            <h3>{item.title}</h3>
                            <h4>{item.date}</h4>
                            <p>{item.desc}</p>
                            <button onClick={() => this.setState({ edit: item })} className="edit">
                                Edit
                            </button>
                            {this.state.edit === item && (
                                <EditNote note={item} edit={this.edit} />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}



class EditNote extends React.Component {

    onSubmit = () => {
        let note = {
            title: this.state.title,
            date: this.props.note.date,
            desc: this.state.desc,
        };
        this.props.edit(this.props.note, note);
    };

    handle = (target, e) => {
        this.setState({ [target]: e.target.value });
    };


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Enter title"
                    onChange={this.handle.bind(this, "title")}
                    defaultValue={this.props.note.title} />
                <input
                    type="text"
                    placeholder="date"
                    readOnly
                    defaultValue={this.props.note.date} />
                <textarea
                    placeholder="Start writing..."
                    onChange={this.handle.bind(this, "desc")}
                    defaultValue={this.props.note.desc} />
                <input type="submit" value="Submit" className="submit" />
            </form>
        );
    }
}
