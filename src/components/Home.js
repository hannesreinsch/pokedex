import React from "react";
import axios from "axios";
import Pokeboard from "./Pokeboard";
import Searchbar from "./Searchbar";
import Loading from "./Loading";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filteredPokemons: [],
      pokemons: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
    this.renderRightPokeboard = this.renderRightPokeboard.bind(this);
  }

  handleInputChange(event) {
    this.setState({ search: event.target.value }, _ => {
      this.filterPokemons();
    });
  }

  filterPokemons() {
    let filtered = this.state.pokemons.filter(pokemon => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.search.toLocaleLowerCase());
    });
    this.setState({ filteredPokemons: filtered });
  }

  renderRightPokeboard() {
    if (this.state.search !== "") {
      if (this.state.filteredPokemons.length < 0) return;
      else return <Pokeboard pokemons={this.state.filteredPokemons} />;
    } else {
      return <Pokeboard pokemons={this.state.pokemons} />;
    }
  }

  componentWillMount() {
    for (let i = 1; i <= 25; i++) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + i)
        .then(pokemon => {
          this.setState({
            pokemons: [...this.state.pokemons, pokemon.data]
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Pokédex</h1>
        <Searchbar
          onChange={this.handleInputChange}
          value={this.state.search}
        />
        {this.state.pokemons.length > 0 ? (
          this.renderRightPokeboard()
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default Home;
