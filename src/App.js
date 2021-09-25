import { Component } from 'react';
import './App.css';
import Item from './Item';

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
    return (
      <div className="App" >
        <h1>List Items</h1>
        <Item list={this.state.items} />
      </div>
    );
  }
}
export default App;