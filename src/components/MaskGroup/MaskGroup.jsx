/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useReducer } from "react";
import "./style.css";

export const MaskGroup = ({ className }) => {
  const [state, dispatch] = useReducer(reducer, { property1: false });

  return (
    <img
      className={`mask-group ${className}`}
      alt="Property"
      src={
        state.property1
          ? "https://c.animaapp.com/JuAZje8Q/img/property-1-variant2@2x.png"
          : "https://c.animaapp.com/JuAZje8Q/img/-@2x.png"
      }
      onClick={() => dispatch("toggle")}
      style={{ cursor: "pointer" }}
    />
  );
};

function reducer(state, action) {
  switch (action) {
    case "toggle":
      return { property1: !state.property1 };
    default:
      return state;
  }
}
