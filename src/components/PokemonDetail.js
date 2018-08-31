import React from "react";
import axios from "axios";
import "./PokemonDetail.css";
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
      <div className="center">
        {this.state.pokemon.length < 1 ? (
          <Loading />
        ) : (
          <PokemonDetailCard pokemon={this.state.pokemon[0]} />
        )}
      </div>
    );
  }
}

export default PokemonDetail;
