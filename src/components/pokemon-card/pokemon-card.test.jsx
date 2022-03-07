import React from "react";
import { render, screen } from "@testing-library/react";

import PokemonCard from "./pokemon-card.component";

// An example of what a test for this component might look like
it("renders a pokemon card given pokemon data", () => {
  const pokemon = {
    name: "Bulbasaur",
    id: "UG9rZW1vbjowMDE=",
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    attacks: {
      fast: [
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
  };
  render(<PokemonCard {...pokemon} />);
  const pokemonTitle = screen.getByTestId("pokemon-name");
  expect(pokemonTitle).toBeInTheDocument();
  expect(pokemonTitle.textContent).toEqual("Bulbasaur");
});
