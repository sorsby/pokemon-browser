import React, { useState } from "react";
import "./card-browser.styles.scss";

import { POKEMONS_QUERY } from "../../graphql/pokemon-client";
import { useQuery } from "@apollo/client";

import PokemonCard from "../../components/pokemon-card/pokemon-card.component";
import Navigation from "../../components/navigation/navigation.component";

const CardBrowser = () => {
  const { data, loading, error } = useQuery(POKEMONS_QUERY);
  const [selected, setSelected] = useState(0);

  const onPrevClicked = (e) => {
    e.preventDefault();
    if (selected === 0) return;
    setSelected(selected - 1);
  };

  const onNextClicked = (e) => {
    e.preventDefault();
    if (selected === 150) return;
    setSelected(selected + 1);
  };

  return (
    <div className="card-browser" data-testid="card-browser">
      <Navigation
        selectedPokemon={selected}
        onNextClicked={onNextClicked}
        onPrevClicked={onPrevClicked}
      />
      <div className="card-container">
        {loading && <h1 data-testid="loading-text">Loading...</h1>}
        {error && <h1 data-testid="error-text">{`Error: ${error}`}</h1>}
        {data && (
          <>
            <PokemonCard
              className="pokemon-card"
              {...data.pokemons[selected]}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CardBrowser;
