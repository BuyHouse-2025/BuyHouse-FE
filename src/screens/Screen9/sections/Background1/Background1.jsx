import React from "react";
import "./style.css";

export const Background1 = ({ onOpenUpdateMemberInfo, onOpenUpdatePwd }) => {
  return (
    <div className="background-1">
      <div className="frame-39">
        <div className="frame-40">
          <div className="image-wrapper">
            <img className="image-8" alt="Image" src="https://c.animaapp.com/JuAZje8Q/img/image-1-1@2x.png" />
          </div>

          <div className="frame-41">
            <div className="text-wrapper-62">장종원님</div>

            <div className="text-wrapper-63" onClick={onOpenUpdatePwd}>
              비밀번호 변경
            </div>
          </div>
        </div>

        <img
          className="mask-group-5"
          alt="Mask group"
          src="https://c.animaapp.com/JuAZje8Q/img/mask-group-29@2x.png"
          onClick={onOpenUpdateMemberInfo}
        />
      </div>

      <div className="background-3">
        <div className="frame-42">
          <img className="money" alt="Money" src="https://c.animaapp.com/JuAZje8Q/img/money-1@2x.png" />

          <img className="property" alt="Property" src="https://c.animaapp.com/JuAZje8Q/img/property-1@2x.png" />

          <img className="cool" alt="Cool" src="https://c.animaapp.com/JuAZje8Q/img/cool-1@2x.png" />
        </div>

        <div className="frame-43">
          <div className="container-17">
            <div className="text-wrapper-64">현재 소지금</div>
          </div>

          <div className="container-17">
            <div className="text-wrapper-64">부동산 자산</div>
          </div>

          <div className="container-17">
            <div className="text-wrapper-64">총 자산</div>
          </div>
        </div>

        <div className="frame-44">
          <div className="container-18">
            <div className="text-wrapper-65">30억 6400만원</div>
          </div>

          <div className="container-18">
            <div className="text-wrapper-66">17억 4900만원</div>
          </div>

          <div className="container-18">
            <div className="text-wrapper-67">48억 1300만원</div>
          </div>
        </div>
      </div>
    </div>
  );
};
