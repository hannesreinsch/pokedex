import React from "react";
import "./PokemonDetailCard.css";

const PokemonDetailCard = ({ pokemon }) => {
  return (
    <div className="detail-card">
      <img
        className="pokeimage"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className="pokeprops">
        <div className="prop">
          <p>Type:</p>
          {pokemon.types.map((t, i) => {
            return (
              <li key={i} className="poketype">
                {t.type.name}
              </li>
            );
          })}
        </div>
        <div className="prop">
          <p>Height:</p>
          <li>{pokemon.height}</li>
        </div>
        <div className="prop">
          <p>Weight:</p>
          <li>{pokemon.weight}</li>
        </div>
      </div>
      <h4 className="pokename">
        Nr.
        {pokemon.id}: {pokemon.name.replace(/\w/, c => c.toUpperCase())}
      </h4>
    </div>
  );
};

export default PokemonDetailCard;
