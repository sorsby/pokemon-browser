import { render, screen } from "@testing-library/react";
import App from "./App";

import { MockedProvider } from "@apollo/react-testing";
import { POKEMONS_QUERY } from "./graphql/pokemon-client";
import wait from "waait";
import { act } from "react-dom/test-utils";

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
test("renders the app when the query succeeds", async () => {
  render(
    <MockedProvider mocks={mockQuery}>
      <App />
    </MockedProvider>
  );

  await act(async () => {
    await wait(0);
  });

  const cardBrowser = screen.getByTestId("card-browser");
  expect(cardBrowser).toBeInTheDocument();
});
