// components/PropertyDefaultWrapper/index.jsx
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({
  buttontext = "button",
  isSelected = false,
  onClick,
  className,
}) => {
  return (
    <div
      className={`property-default-wrapper ${isSelected ? "selected" : "default"} ${className}`}
      onClick={onClick}
    >
      <div className="button">{buttontext}</div>
    </div>
  );
};
