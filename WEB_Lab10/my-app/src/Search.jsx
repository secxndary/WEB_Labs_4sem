import React from "react";
export class Search extends React.Component {
    onChange = (e) => {
        this.setState(() => this.props.search(e.target.value));
    };
    onClick = (target) => {
        this.setState(() => this.props.searchParameter(target));
    };
    render() {
        return (
            <div className="search">
                <input type="search" placeholder="Search..." onChange={this.onChange} id="search"/>
                <label className="labelCom">
                    <input
                        type="radio"
                        id="partial"
                        name="search"
                        defaultChecked
                        onClick={this.onClick.bind(this, "partial")}
                    />
                    Partial match
                </label>
                <label className="labelCom">
                    <input
                        type="radio"
                        id="full"
                        name="search"
                        onClick={this.onClick.bind(this, "full")}
                    />
                    Full match
                </label>
            </div>
        );
    }
}
