import React, { Component } from 'react';
import './styles2.css';



class SortTable extends Component {

    constructor(props) {
        super(props);
        this.sorted = { name: true, price: true, stock: true };
        this.state = { array: this.goods };
    }


    goods = [
        {
            key: 1,
            name: 'Butter',
            price: 0.9,
            stock: 14
        },
        {
            key: 2,
            name: 'Cheese',
            price: 4.9,
            stock: 0
        },
        {
            key: 3,
            name: 'Fancy French Cheese',
            price: 99,
            stock: 4
        },
        {
            key: 4,
            name: 'Heavy Cream',
            price: 3.9,
            stock: 9
        },
        {
            key: 5,
            name: 'Milk',
            price: 1.9,
            stock: 8
        },
        {
            key: 7,
            name: 'Yoghurt',
            price: 2.4,
            stock: 1
        },
        {
            key: 6,
            name: 'Sour Cream',
            price: 2.9,
            stock: 2
        }
    ]



    sort(n) {
        let res = this.sorted[n] ? 1 : -1,
            goodsCopy = [...this.goods].sort(function (a, b) {
                if (a[n] > b[n]) {
                    return res;
                }
                if (a[n] < b[n]) {
                    return res * -1;
                }
                return 0;
            });
        this.sorted[n] = !this.sorted[n];
        this.setState({ array: goodsCopy });
    }



    tableHeader() {
        return (
            <tr className='cursorr'>
                <td className='button' id='notCursorr'>№</td>
                <td onClick={() => this.sort('name')} ><input type='button' value='Name' className='button' /></td>
                <td onClick={() => this.sort('price')}><input type='button' value='Price' className='button' /></td>
                <td onClick={() => this.sort('stock')} ><input type='button' value='In stock' className='button' /></td>
            </tr>
        );
    }



    table() {
        let num = 0;
        let stockStyle = "";

        return this.state.array.map((t) => {
            if (t.stock === 0) stockStyle = 'crimson';
            else if (t.stock < 3) stockStyle = 'khaki';
            else stockStyle = 'aquamarine';

            return (<tr>
                <td>{++num}</td>
                <td>{t.name}</td>
                <td>${t.price}</td>
                <td style={{ background: stockStyle }}>{t.stock}</td>
            </tr>);
        }
        )
    }


    render() {
        return (
            <div id='container'>
                <table>
                    {this.tableHeader()}
                    {this.table()}
                </table>
            </div>
        );
    }
}


export default SortTable;