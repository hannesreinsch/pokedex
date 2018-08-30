import React from "react";
import axios from "axios";
import Loading from "./Loading";
import PokemonDetailCard from "./PokemonDetailCard";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  componentWillMount() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`)
      .then(pokemon => {
        this.setState({
          pokemon: [...this.state.pokemon, pokemon.data]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h2>PokemonDetail</h2>
        {this.state.pokemon.length < 1 ? <Loading /> : <PokemonDetailCard />}
      </React.Fragment>
    );
  }
}

export default PokemonDetail;
