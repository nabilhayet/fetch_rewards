import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      name: ""
    }
  }

  componentDidMount() {
    fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json")
      .then(response => response.json())
      .then(items => {
        items.forEach(element => {
          if (element.name != "" && element.name != null) {
            this.setState({
              items: [...this.state.items, element]
            })
          }
        });
      })
  }

  render() {
    const getItems = this.state.items.reduce((itemsSoFar, { listId, name }) => {
      if (!itemsSoFar[listId]) itemsSoFar[listId] = [];
      itemsSoFar[listId].push(name);
      return itemsSoFar;
    }, {});

    const keys = Object.keys(getItems)
    const values = keys.map(k => {
      return (
        getItems[k].map((v) => {
          return (
            <div>
              {k} ----- {v}
            </div>
          )
        })
      )
    })
    return (
      <div className="App" >
        <h1>List Items</h1>
        <button onClick={this.showItems}>Sort By ListId</button>
        <button onClick={this.showItems}>Sort By Name</button>
        {values}

      </div>
    );
  }
}

export default App;