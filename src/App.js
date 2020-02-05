import React, { Component } from "react";

import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/SearchBox/SearchBox";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    // 2. like so:
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // 1. You will need to bind this within the constructor
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  // arrow functions skip binding step
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // destructuring - don't directly mutate og array
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsers Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          onSearchChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
