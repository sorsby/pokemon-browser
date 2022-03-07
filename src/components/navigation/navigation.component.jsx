import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./navigation.styles.scss";

const Navigation = ({ selectedPokemon, onNextClicked, onPrevClicked }) => {
  const formatID = (id) => {
    return String(id + 1).padStart(3, "0");
  };

  return (
    <div className="navigation-container">
      <CustomButton
        disabled={selectedPokemon === 0}
        onClick={onPrevClicked}
        data-testid="prev-button"
      >
        -1
      </CustomButton>
      <p className="selected-pokemon-id" data-testid="current-pokemon-id">
        {formatID(selectedPokemon)}
      </p>
      <CustomButton
        disabled={selectedPokemon === 150}
        onClick={onNextClicked}
        data-testid="next-button"
      >
        +1
      </CustomButton>
    </div>
  );
};

export default Navigation;
