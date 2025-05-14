import React from "react";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { Frame1 } from "./sections/Frame1";
import { FrameWrapper } from "./sections/FrameWrapper";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import "./style.css";

export const Screen5 = () => {
  return (
    <div className="screen-5" data-model-id="1:1193">
      <div className="overlap-group-3">
        <div className="view-6">
          <div className="frame-104 content-wrapper">
            <Frame />
            <FrameWrapper />
            <DivWrapper />
            <Div />
            <SectionComponentNode />
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
};
