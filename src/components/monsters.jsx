import React, { Component } from "react";

import CardList from "./card-list/card-list.component";
import SearchBox from "./search-box/searchbox.component";

class monsters extends Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div style={{textAlign: "center"}}>
        <h1 style={{fontFamily: 'Bigelow Rules', fontSize: '65px', color: '#95D9DA'}}>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters..." handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default monsters;
