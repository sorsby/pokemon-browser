import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, disabled, ...otherProps }) => {
  return (
    <div>
      <button className="custom-button" disabled={disabled} {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
