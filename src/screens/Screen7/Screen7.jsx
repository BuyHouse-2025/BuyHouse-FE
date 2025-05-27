import React from "react";
import { Background } from "./sections/Background";
import { BackgroundWrapper } from "./sections/BackgroundWrapper";
import { Frame2 } from "./sections/Frame2";
import { Frame3 } from "./sections/Frame3";
import "./style.css";

export const Screen7 = ({ aptDetail, onClose }) => {
  if (!aptDetail) return null;

  return (
    <div className="screen-7" data-model-id="1:167">
      <div className="background-shadow">
        <div className="background-13">
          <div className="frame-117">
            <img
              className="image-11"
              alt="Image"
              src="https://c.animaapp.com/JuAZje8Q/img/image-2-1@2x.png" // 사진 정보 받아와야할듯..?
            />

            <Frame2 aptDetail={aptDetail} />
            <Frame3 aptDetail={aptDetail} />
            <Background aptDetail={aptDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};
