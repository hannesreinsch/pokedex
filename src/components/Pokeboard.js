import React from "react";
import Pokecard from "./Pokecard";
import "./Pokeboard.css";

const Pokeboard = ({ pokemons }) => {
  return (
    <div className="board">
      {pokemons.map(pokemon => {
        return <Pokecard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default Pokeboard;
