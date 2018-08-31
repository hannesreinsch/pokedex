import React from "react";
import "./PokemonDetailCard.css";

const PokemonDetailCard = ({ pokemon }) => {
  return (
    <div className="detail-card">
      <h4 className="pokename">
        Nr.
        {pokemon.id}: {pokemon.name.replace(/\w/, c => c.toUpperCase())}
      </h4>
      <img
        className="pokeimage"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p>Types:</p>
      {pokemon.types.map((t, i) => {
        return (
          <li key={i} className="poketype">
            {t.type.name}
          </li>
        );
      })}
    </div>
  );
};

export default PokemonDetailCard;
