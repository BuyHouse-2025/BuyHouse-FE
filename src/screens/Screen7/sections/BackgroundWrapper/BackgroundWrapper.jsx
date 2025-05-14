import React from "react";
import { BackgroundBorder } from "../../../../components/BackgroundBorder";
import { MaskGroup } from "../../../../components/MaskGroup";
import "./style.css";

export const BackgroundWrapper = ({ onClose }) => {
  return (
    <div className="background-wrapper">
      <div className="frame-33">
        <div className="frame-34">
          <MaskGroup
            className="mask-group-instance"
            property1="false"
            propertyFalse="https://c.animaapp.com/JuAZje8Q/img/mask-group-23@2x.png"
          />
          <div className="paragraph">
            <div className="text-wrapper-57">삼성중앙하이츠빌리지</div>
          </div>
        </div>

        <BackgroundBorder
          divClassName="background-border-instance"
          property1="one"
        />
        <div className="sideclose-svg-fill-wrapper" onClick={onClose}>
          <img
            className="mask-group-2"
            alt="Mask group"
            src="https://c.animaapp.com/JuAZje8Q/img/mask-group-24@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
