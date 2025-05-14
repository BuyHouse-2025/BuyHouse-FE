import React from "react";
import { CloseSvgFill } from "../../components/CloseSvgFill";
import { MaskGroup } from "../../components/MaskGroup";
import "./style.css";

export const Favorite = ({ closeFavorite }) => {
  return (
    <div className="favscreen" data-model-id="1:867">
      <div className="favtop" onClick={closeFavorite}>
        <CloseSvgFill className="close-svg-fill-instance" />
      </div>

      <div className="favscroll-wrapper">
        <div className="favscroll">
          <div className="favitems">
            <div className="favbg">
              <div className="favframe">
                <div className="wish">
                  <div className="favbasic-info">
                    <div className="favtext-wrapper">전답 18평</div>

                    <div className="favdiv-wrapper">
                      <div className="favdiv">매매</div>
                    </div>
                  </div>

                  <div className="favinfo">
                    <div className="favtext-wrapper-2">서울특별시 강남구 개포동 586-4</div>

                    <div className="favprice">
                      <div className="favtext-wrapper-3">실거래가</div>

                      <div className="favtext-wrapper-4">2억 9646만원</div>
                    </div>
                  </div>
                </div>

                <div className="favimage">
                  <MaskGroup className="mask-group-instance" property1="false" propertyFalse="/img/mask-group-1.png" />
                </div>
              </div>
            </div>

            <div className="favbg">
              <div className="favframe">
                <div className="wish">
                  <div className="favbasic-info">
                    <div className="favtext-wrapper">전답 18평</div>

                    <div className="favdiv-wrapper">
                      <div className="favdiv">매매</div>
                    </div>
                  </div>

                  <div className="favinfo">
                    <div className="favtext-wrapper-2">서울특별시 강남구 개포동 586-4</div>

                    <div className="favprice">
                      <div className="favtext-wrapper-3">실거래가</div>

                      <div className="favtext-wrapper-4">2억 9646만원</div>
                    </div>
                  </div>
                </div>

                <div className="favimage">
                  <MaskGroup className="mask-group-instance" property1="false" propertyFalse="/img/mask-group-1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fav-num">
        <div className="favtext-wrapper-5">아파트 2</div>
      </div>
    </div>
  );
};
