import React from "react";
import { render, screen } from "@testing-library/react";

import Navigation from "./navigation.component";

it("should render the +1 button", () => {
  render(<Navigation />);
  const nextButton = screen.getByTestId("next-button");
  expect(nextButton).toBeInTheDocument();
  expect(nextButton.textContent).toEqual("+1");
});

it("should render the -1 button", () => {
  render(<Navigation />);
  const prevButton = screen.getByTestId("prev-button");
  expect(prevButton).toBeInTheDocument();
  expect(prevButton.textContent).toEqual("-1");
});

it("should display the current pokemon ID", () => {
  render(<Navigation />);
  const currentPokemonID = screen.getByTestId("current-pokemon-id");
  expect(currentPokemonID).toBeInTheDocument();
});
