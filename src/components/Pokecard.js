import React from "react";
import "./Pokecard.css";
import { Link } from "react-router-dom";

const Pokecard = ({ pokemon }) => {
  return (
    <Link to={`pokemon/${pokemon.id}`} className="card">
      <img
        className="image"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p className="name">{pokemon.name.replace(/\w/, c => c.toUpperCase())}</p>
    </Link>
  );
};

export default Pokecard;
