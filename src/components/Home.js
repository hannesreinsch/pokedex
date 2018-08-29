import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    for (let i = 1; i <= 30; i++) {
      axios.get("https://pokeapi.co/api/v2/pokemon/" + i).then(poke => {
        this.setState({
          pokemons: [...this.state.pokemons, poke.data]
        });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Pokédex</h2>
        {this.state.pokemons.map(pokemon => {
          return <li>{pokemon.name}</li>;
        })}
      </React.Fragment>
    );
  }
}

export default Home;
