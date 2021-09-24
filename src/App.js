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
    const getItems = this.state.items.reduce((itemsSoFar, { listId, name }) => {
      if (!itemsSoFar[listId]) itemsSoFar[listId] = [];
      itemsSoFar[listId].push(name);
      return itemsSoFar;
    }, {});

    const keys = Object.keys(getItems).sort(this.compare)

    const values = keys.map(k => {
      return (
        getItems[k].sort(this.compare).map((v) => {
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
        {values}

      </div>
    );
  }
}


export default App;