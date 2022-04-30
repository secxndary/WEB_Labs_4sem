import { Component } from "react";

export class SortTable extends Component {
    constructor(props) {
        super(props);
        this.sorted = { name: true, price: true, inStock: true, discount: true };
        this.state = { array: this.goods };
    }

    goods = [
        { id: "Syringe", name: "'Syringe'", price: 250, inStock: 12, img: "/imgs/syringe2.jpg", desc: "Nike Graviton Lea custom. Fill with any suitable liquid through a syringe.", new: true, discount: 0 },
        { id: "Water", name: "'Water'", price: 220, inStock: 10, img: "/imgs/water.jpg", desc: "Nike M2K Tekno custom. Fill with any suitable liquid through the cap.", new: true, discount: 10 },
        { id: "Copper", name: "'Copper'", price: 240, inStock: 6, img: "/imgs/copper.jpg", desc: "Nike Air Max 97 custom. It is made of copper wire and conducts electric current. Be careful.", new: false, discount: 20 },
        { id: "Moon", name: "'Moon'", price: 340, inStock: 0, img: "/imgs/moon.jpg", desc: "Caterpillar MK50 custom. Inspired by Neil Armstrong's moonboots. Perfect for your trip to the Moon.", new: false, discount: 0 },
        { id: "Coal", name: "'Coal'", price: 210, inStock: 7, img: "/imgs/coal.jpg", desc: "Arcteryx Neanderthal v2000 custom. Made of natural coal. You can fry kebabs on them.", new: false, discount: 0 },
        { id: "Off-road", name: "'Off-road'", price: 200, inStock: 4, img: "/imgs/off-road.jpg", desc: "New Balance 530 custom. Added additional bicycle mounts.", new: false, discount: 10 },
    ];
    styles = {
        td: {
            padding: "10px 20px",
            border: "1px solid",
        },
        table: {
            margin: "100px",
            borderCollapse: "collapse",
        },
    };
    sort(byWhat) {
        let direction = this.sorted[byWhat] ? 1 : -1,
            goodsCopy = [...this.goods].sort(function (a, b) {
                if (a[byWhat] > b[byWhat]) {
                    return direction;
                }
                if (a[byWhat] < b[byWhat]) {
                    return direction * -1;
                }
                return 0;
            });
        this.sorted[byWhat] = !this.sorted[byWhat];
        this.setState({ array: goodsCopy });
    }
    table() {
        let stringNumber = 0;
        return this.state.array.map((item) => {
            let inStockStyle = {};
            if (+item.inStock < 3) inStockStyle = { background: "rgb(255, 240, 106)" };
            if (+item.inStock === 0) inStockStyle = { background: "rgb(248, 54, 54)" };
            return (
                <tr key={item.id}>
                    <td style={this.styles.td}>{++stringNumber}</td>
                    <td style={this.styles.td}>{item.name}</td>
                    <td style={this.styles.td}>${item.price}</td>
                    <td style={Object.assign({}, this.styles.td, inStockStyle)}>
                        {item.inStock}
                    </td>
                    <td style={this.styles.td}><img src={item.img} style={{ width: "50px" }} alt="" /></td>
                    <td style={this.styles.td}>{item.desc}</td>
                    <td style={this.styles.td}>{item.new ? "Yes" : "No"}</td>
                    <td style={this.styles.td}>{item.discount}%</td>
                </tr>
            );
        });
    }
    head = [
        <tr>
            <td style={this.styles.td}>№</td>
            <td style={this.styles.td}>
                <button onClick={() => this.sort("name")}>Name</button>
            </td>
            <td style={this.styles.td}>
                <button onClick={() => this.sort("price")}>Price</button>
            </td>
            <td style={this.styles.td}>
                <button onClick={() => this.sort("inStock")}>In Stock</button>
            </td>
            <td style={this.styles.td}>Image</td>
            <td style={this.styles.td}>Description</td>
            <td style={this.styles.td}>New</td>
            <td style={this.styles.td}>
                <button onClick={() => this.sort("discount")}>Discount</button>
            </td>
        </tr>,
    ];
    render() {
        return null
    }
}
