import React from "react";
import { CloseSvgFill } from "../../components/CloseSvgFill";
import { ParagraphOverlay } from "./sections/ParagraphOverlay";
import { UserInfo } from "./sections/UserInfo";
import { Property } from "./sections/Property"; // 새 컴포넌트 import
import "./style.css";

export const MyEstate = ({ closeMyEstate }) => {
  return (
    <div className="estatescreen" data-model-id="1:803">
      <div className="estatetop" onClick={closeMyEstate}>
        <CloseSvgFill className="close-svg-fill-instance" />
      </div>
      <div className="estateview">
        <div className="estate-group-wrapper">
          <div className="estateoverlap-group">
            <div className="estatebg" />

            <div className="estate-main-frame">
              <div className="usertitle">
                <div className="estatehorizontal-border">
                  <div className="estatetext-wrapper-25">매매</div>
                </div>
              </div>

              <UserInfo />
              <ParagraphOverlay />
              <Property
                name="삼성힐스테이트"
                dealType="매매"
                price="6.6억"
                area="26평"
                date="2024-06-01"
                gain={42000000}
                gainRate="+7.5%"
              />

              <Property
                name="래미안퍼스티지"
                dealType="전세"
                price="7.2억"
                area="34평"
                date="2023.09.18"
                gain={55000000}
                gainRate="0%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
