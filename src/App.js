import React from "react"

// Components
import { CardList } from "./components/card-list/CardListComponent"
import { SearchBox } from "./components/search-box/SearchBoxComponent"

// Assets
import "./App.css"
import logo from "./logo.svg"



class App extends React.Component {

  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder="Search monsters"
          handleChange={ e => this.setState({ searchField: e.target.value }) } 
        />
        <CardList monsters={ filterMonsters } />
      </div>
    );
  }

}

export default App
