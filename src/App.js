import "./App.css";
import { CardList } from "./components/card_list/card_list.component.jsx";
import { Component } from "react";
import { SearchBox } from "./components/search_box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      msg: "WELCOME!!",
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  changeFunction = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Blox</h1>
        <SearchBox
          placeholder="search monsters"
          changeFunction={this.changeFunction}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
