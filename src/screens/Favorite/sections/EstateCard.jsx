import React from "react";
import { MaskGroup } from "../../../components/MaskGroup";

export const EstateCard = ({ aptSeq, title, type, address, priceLabel, priceValue, userWishList, fetchWish }) => {
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
          </div>
        </div>
        <div className="image">
          <MaskGroup
            className="mask-group-instance"
            aptSeq={aptSeq}
            wishList={userWishList}
            refreshWishList={fetchWish}
          />
        </div>
      </div>
    </div>
  );
};
