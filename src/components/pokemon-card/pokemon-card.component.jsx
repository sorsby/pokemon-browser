import React from "react";

import "./pokemon-card.styles.scss";

// Potential to break this down into smaller components
const PokemonCard = ({ id, name, image, resistant, weaknesses, attacks }) => {
  return (
    <div className="pokemon-card" data-testid="pokemon-card">
      <h1 className="pokemon-name" data-testid="pokemon-name">
        {name}
      </h1>
      <img className="pokemon-image" src={image} alt={name}></img>
      <div className="attacks-container">
        <div className="fast">
          <h3 className="fast-title">Fast</h3>
          {attacks.fast.map(({ name, type, damage }) => (
            <div className="fast-attack" key={`${id}-${name}-${damage}`}>
              <p className="attack-title">{name}</p>
              <div className="type-damage-row">
                <p>{type}</p>
                <p>{damage}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="special">
          <h3 className="special-title">Special</h3>
          {attacks.special.map(({ name, type, damage }) => (
            <div className="special-attack" key={`${id}-${name}-${damage}`}>
              <p className="attack-title">{name}</p>
              <div className="type-damage-row">
                <p>{type}</p>
                <p>{damage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="resistant-weaknesses-container">
        <div className="resistant">
          <h3 className="resistant-title">Resistant</h3>
          {resistant.map((resist) => (
            <p key={`${id}-${name}-${resist}`}>{resist}</p>
          ))}
        </div>
        <div className="weaknesses">
          <h3 className="weaknesses-title">Weaknesses</h3>
          {weaknesses.map((weak) => (
            <p key={`${id}-${name}-${weak}`}>{weak}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
