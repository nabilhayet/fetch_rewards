import { Component } from 'react';
import './App.css';

class Item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: []
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
            items: [...this.state.items, myObj]
        })
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
                                <li>{`Item ${b}`}</li>
                            )
                        })
                        return s;

                    }
                    else {
                        return (
                            <li>{e}</li>
                        )
                    }
                })
                return v;
            })
            return values
        })


        return (
            <div>
                <button onClick={this.getItems}>VIEW Items</button>
                {object}
            </div >
        )
    }
}
export default Item;