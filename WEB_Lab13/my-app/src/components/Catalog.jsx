import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal.jsx";
import { addToCart } from "../redux/actions";
import "../index.css";
import ReactDOM from "react-dom"
import OrderForm from "./OrderForm.jsx";

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.sorted = { name: true, price: true, inStock: true, discount: true };
        this.state = { array: this.array, isModalOpen: false, toOrder: false };
    }
    array = [
        { id: "Syringe", name: "'Syringe'", price: 250, inStock: 12, img: "/imgs/syringe2.jpg", desc: "Nike Graviton Lea custom. Fill with any suitable liquid through a syringe.", new: true, discount: 5, weight: 8, added: 0 },
        { id: "Water", name: "'Water'", price: 220, inStock: 10, img: "/imgs/water.jpg", desc: "Nike M2K Tekno custom. Fill with any suitable liquid through the cap.", new: true, discount: 10, weight: 3, added: 0 },
        { id: "Copper", name: "'Copper'", price: 240, inStock: 6, img: "/imgs/copper.jpg", desc: "Nike Air Max 97 custom. It is made of copper wire and conducts electric current. Be careful.", new: false, discount: 20, weight: 6, added: 0 },
        { id: "Moon", name: "'Moon'", price: 340, inStock: 1, img: "/imgs/moon.jpg", desc: "Caterpillar MK50 custom. Inspired by Neil Armstrong's moonboots. Perfect for your trip to the Moon.", new: false, discount: 5, weight: 12, added: 0 },
        { id: "Coal", name: "'Coal'", price: 210, inStock: 7, img: "/imgs/coal.jpg", desc: "Arcteryx Neanderthal v2000 custom. Made of natural coal. You can fry kebabs on them.", new: false, discount: 10, weight: 5, added: 0 },
        { id: "Off-road", name: "'Off-road'", price: 200, inStock: 4, img: "/imgs/off-road.jpg", desc: "New Balance 530 custom. Added additional bicycle mounts.", new: false, discount: 10, weight: 8, added: 10 },
    ];
    sort(byWhat) {
        let direction = this.sorted[byWhat] ? 1 : -1,
            arrayCopy = [...this.state.array].sort(function (a, b) {
                if (a.new || b.new) return 0;
                if (a[byWhat] > b[byWhat]) {
                    return direction;
                }
                if (a[byWhat] < b[byWhat]) {
                    return direction * -1;
                }
                return 0;
            });
        this.sorted[byWhat] = !this.sorted[byWhat];
        this.setState({ array: arrayCopy });
    }
    sorts() {
        return (
            <div className="sorts">
                <button onClick={() => this.sort("name")}>Name</button>
                <button onClick={() => this.sort("price")}>Price</button>
                <button onClick={() => this.sort("inStock")}>In Stock</button>
                <button onClick={() => this.sort("discount")}>Discount</button>
            </div>
        );
    }
    onClickHandler(item, e) {
        this.props.addToCart(item);
        e.target.disabled = true;
        this.setState({ isModalOpen: true });
    }
    goods() {
        return this.state.array.map((item) => {
            return (
                <div className="one_good" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="text">
                        <div className="discount">
                            {item.new && <h2>New</h2>}
                            <h2>{item.discount}%</h2>
                            <button
                                className="cart"
                                onClick={(e) => this.onClickHandler(item, e)}
                            >
                                add to cart
                            </button>
                        </div>
                        <h2>{item.name}</h2>
                        <div className="prices">
                            {item.discount && (
                                <h2>{(item.price * (100 - item.discount)) / 100}$</h2>
                            )}
                            <h3>{item.price}$</h3>
                        </div>
                        <h4>Available: {item.inStock} items</h4>
                        <div>{item.desc}</div>
                    </div>
                </div>
            );
        });
    }
    closeModal = () => {
        this.setState({ isModalOpen: false })
    }
    toOrder = () => {
        this.setState({ toOrder: true })
    }
    render() {
        return (
            !this.state.toOrder ?
                <>
                    <div className="title">@canyaon custom shop.</div>
                    {this.sorts()}
                    <div className="container">
                        {this.goods()}
                    </div>
                    {this.state.isModalOpen && ReactDOM.createPortal(
                        <Modal toCatalog={this.closeModal} toOrder={this.toOrder} />,
                        document.getElementById("portal")
                    )}

                </>
                : <OrderForm />
        );
    }
}

const mapDispatchToProps = {
    addToCart,
};
export default connect(null, mapDispatchToProps)(Catalog);
