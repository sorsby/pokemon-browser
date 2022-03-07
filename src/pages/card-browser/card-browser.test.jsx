import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import CardBrowser from "./card-browser.page";
import { MockedProvider } from "@apollo/react-testing";
import { POKEMONS_QUERY } from "../../graphql/pokemon-client";
import wait from "waait";

const mockErrorQuery = [
  {
    request: {
      query: POKEMONS_QUERY,
    },
    error: new Error("unexpected error"),
  },
];
const mockQuery = [
  {
    request: {
      query: POKEMONS_QUERY,
    },
    result: {
      data: {
        pokemons: [
          {
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
          },
        ],
      },
    },
  },
];

it("should render a pokemon card", async () => {
  render(
    <MockedProvider mocks={mockQuery}>
      <CardBrowser />
    </MockedProvider>
  );

  await act(async () => {
    await wait(0);
  });

  const pokemonCard = screen.getByTestId("pokemon-card");
  expect(pokemonCard).toBeInTheDocument();
});

it("should render the +1 button", () => {
  render(
    <MockedProvider mocks={mockQuery}>
      <CardBrowser />
    </MockedProvider>
  );
  const nextButton = screen.getByTestId("next-button");
  expect(nextButton).toBeInTheDocument();
  expect(nextButton.textContent).toEqual("+1");
});

it("should render the -1 button", () => {
  render(
    <MockedProvider mocks={mockQuery}>
      <CardBrowser />
    </MockedProvider>
  );
  const prevButton = screen.getByTestId("prev-button");
  expect(prevButton).toBeInTheDocument();
  expect(prevButton.textContent).toEqual("-1");
});

it("should display the current pokemon ID", () => {
  render(
    <MockedProvider mocks={mockQuery}>
      <CardBrowser />
    </MockedProvider>
  );
  const currentPokemonID = screen.getByTestId("current-pokemon-id");
  expect(currentPokemonID).toBeInTheDocument();
});

it("should display loading state when loading query", () => {
  render(
    <MockedProvider mocks={mockQuery}>
      <CardBrowser />
    </MockedProvider>
  );
  const loadingText = screen.getByTestId("loading-text");
  expect(loadingText).toBeInTheDocument();
});

it("should display an error when the query fails", async () => {
  render(
    <MockedProvider mocks={mockErrorQuery}>
      <CardBrowser />
    </MockedProvider>
  );

  await act(async () => {
    await wait(0);
  });

  const errorText = screen.getByTestId("error-text");
  expect(errorText).toBeInTheDocument();
});
