import React from "react";
import { MaskGroup } from "../../../components/MaskGroup";

export const EstateCard = ({ title, type, address, priceLabel, priceValue, image }) => {
  return (
    <div className="background">
      <div className="frame">
        <div className="wish">
          <div className="basic-info">
            <div className="text-wrapper">{title}</div>
            <div className="div-wrapper">
              <div className="div">{type}</div>
            </div>
          </div>
          <div className="info">
            <div className="text-wrapper-2">{address}</div>
            <div className="price">
              <div className="text-wrapper-3">{priceLabel}</div>
              <div className="text-wrapper-4">{priceValue}</div>
            </div>
          </div>
        </div>
        <div className="image">
          <MaskGroup
            className="mask-group-instance"
            property1="false"
            propertyFalse={image}
          />
        </div>
      </div>
    </div>
  );
};
