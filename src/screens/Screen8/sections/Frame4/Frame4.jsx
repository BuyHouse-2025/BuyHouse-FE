import React from "react";
import { MaskGroup } from "../../../../components/MaskGroup";
import "./style.css";

export const Frame4 = ({ onClose, selectedDistrict, selectedNeighborhood }) => {
  return (
    <div className="frame-4">
      <div className="frame-37">
        <div className="frame-38">
          <div className="text-wrapper-59">서울</div>
          <img
            className="mask-group-3"
            alt="Mask group"
            src="https://c.animaapp.com/JuAZje8Q/img/mask-group-26@2x.png"
          />
          <div className="text-wrapper-60">{selectedDistrict}</div>
          <img
            className="mask-group-3"
            alt="Mask group"
            src="https://c.animaapp.com/JuAZje8Q/img/mask-group-26@2x.png"
          />
          <div className="text-wrapper-61">{selectedNeighborhood}</div>
        </div>

        <MaskGroup
          className="image-7"
          property1="false"
          propertyFalse="https://c.animaapp.com/JuAZje8Q/img/-@2x.png"
        />
      </div>

      {/* ❗ 이 닫기 버튼에 onClose 연결 */}
			
      <div className="close-svg-fill-wrapper" onClick={onClose}>
        <div className="close-svg-fill">
          <div className="close-svg">
            <img
              className="mask-group-4"
              alt="Close"
              src="https://c.animaapp.com/JuAZje8Q/img/mask-group-27@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
