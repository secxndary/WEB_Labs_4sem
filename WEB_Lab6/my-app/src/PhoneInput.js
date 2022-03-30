import React, { Component } from "react";




export class PhoneInput extends Component {
    constructor(props) {
        super(props);
        this.telOutput = null;
    }



    state = {
        key: 0,
        name: "Belarus",
        code: "+375",
        img: "by_.png",
        place: "+375 (__) ___-__-__",
        display: false,
        count: 13,
        mask: "XXXX (XX) XXX-XX-XX",
        number: ""
    }

    countries =
        [
            {
                key: 1,
                name: "Belarus",
                code: "+375",
                img: "by_.png",
                place: "+375 (__) ___-__-__",
                mask: "XXXX (XX) XXX-XX-XX",
                count: 13
            },
            {
                key: 2,
                name: "Poland",
                code: "+48",
                img: "pl.png",
                place: "+48 ___-___-___",
                mask: "XXX XXX-XXX-XXX",
                count: 12
            },
            {
                key: 3,
                name: "Russia",
                code: "+7",
                img: "ru.png",
                place: "+7 (___) ___-__-__",
                mask: "XX (XXX) XXX-XX-XX",
                count: 12
            },
            {
                key: 4,
                name: "Ukraine",
                code: "+380",
                img: "ua.png",
                place: "+380 (__) ___-__-__",
                mask: "XXXX (XX) XXX-XX-XX",
                count: 13
            },
            {
                key: 5,
                name: "Lithuania",
                code: "+370",
                img: "lt.png",
                place: "+370 (__) ___-__-__",
                mask: "XXXX (XX) XXX-XX-XX",
                count: 13
            },
            {
                key: 6,
                name: "Latvia",
                code: "+371",
                img: "lv.png",
                place: "+371 ____-____",
                mask: "XXXX XXXX-XXXX",
                count: 12
            },
        ];


    list() {
        return (
            <ul>
                {this.countries.map((c) => {
                    return (
                        <li onClick={() => {
                            this.setState({
                                key: c.key,
                                name: c.name,
                                code: c.code,
                                img: c.img,
                                place: c.place,
                                count: c.count,
                                number: c.code,
                                mask: c.mask
                            });
                            console.log(this.state.name);
                        }
                        }>
                            <label>
                                <img className="listImg" src={c.img} alt="" />
                                <input type="radio" value={c.name} />{c.name} {c.code}
                            </label>
                        </li>
                    );
                })}
            </ul>
        );
    }


    numberField() {
        return (
            <div>
                <label id="labelNumField">
                    <input 
                        onClick={() => {
                            this.setState({ display: !this.state.display });
                            console.log(this.state.display);
                        }}
                        placeholder={this.state.place}
                        onChange={this.handleChange}
                        value={this.state.number}
                        maxLength={this.state.count} 
                        onInput={this.handleInput}/>
                </label>
            </div>
        );
    }


    handleInput = (e) => {
        this.props.updateTelephone(e.target.value);
        console.log('state from phoneInput: ' + e.target.value)
    }


    handleChange = (e) => {
        e.preventDefault();
        this.setState(
            {
                number: e.target.value,
            },
            () => {
                this.countries.forEach((c) => {
                    if (this.state.number === c.code)
                        this.setState({
                            value: c.value,
                            place: c.place,
                            img: c.img,
                            mask: c.mask,
                            count: c.count,
                            name: c.name
                        });
                });

                if (this.state.count === this.state.number.length) {
                    let maskArr = this.state.mask.split(""),
                        numberArr = this.state.number.split("");
                    for (let i = 0, j = 0; i < maskArr.length; i++)
                        if (maskArr[i] === "X") {
                            maskArr[i] = numberArr[j];
                            j++;
                        }
                    let number = maskArr.join("");
                    this.setState({ number: number });
                }
            }
        );
    };




    render() {
        return (
            <div id="number">
                {this.numberField()}
                {/* {this.state.display ? this.list() : null} */}
            </div>
        );
    }

}