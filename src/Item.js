import { Component } from 'react';
import './App.css';

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            disabled: false
        }
    }
    getItems = () => {
        const myObj = {}
        this.props.list.map((item) => {
            let getListId = item.listId
            if (!myObj[getListId]) {
                myObj[getListId] = []
            } else {
                myObj[getListId].push(item.name)
            }
            return item
        })
        this.setState({
            items: [...this.state.items, myObj],
            disabled: true
        })


    }

    renderTableHeader() {
        const getHeader = this.state.items.map(obj => {
            const header = Object.entries(obj)[0]
            return header.map((key) => {
                if (key.length == 1) {
                    return (
                        <th id="1">List Id</th>
                    )
                } else {
                    return (
                        <th id="80">List Name</th>
                    )

                }
            })
        })
        return getHeader
    }

    renderTableData() {
        const object = this.state.items.map(obj => {
            const keyValuePair = Object.entries(obj)
            const values = keyValuePair.map((entries) => {
                const v = entries.map((e) => {
                    let newArray = [];
                    if (e.length > 1) {
                        const a = e.map((arr) => {
                            const splitArray = arr.split(" ")
                            newArray.push(splitArray[1])
                        })
                        newArray = newArray.map(Number).sort(this.compare)
                        const s = newArray.map((b) => {
                            return (
                                <tr>
                                    <td><li>{`Item ${b}`}</li></td>
                                </tr>

                            )
                        })
                        return s;
                    }
                    else {
                        return (
                            <tr>{e}</tr>


                        )
                    }
                })
                return v;
            })
            return values
        })
        return object
    }

    compare = (a, b) => {
        const titleA = a;
        const titleB = b;

        let comparison = 0;
        if (titleA > titleB) {
            comparison = 1;
        } else if (titleA < titleB) {
            comparison = -1;
        }
        return comparison;
    }

    render() {
        return (
            <div>
                <button onClick={this.getItems} disabled={this.state.disabled}>VIEW Items</button>
                <table id='students'>
                    <thead>
                        <tr>{this.renderTableHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>

            </div >
        )
    }
}
export default Item;