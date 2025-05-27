import React from "react";
import { Background } from "./sections/Background";
import { BackgroundWrapper } from "./sections/BackgroundWrapper";
import { Frame2 } from "./sections/Frame2";
import { Frame3 } from "./sections/Frame3";
import "./style.css";

export const Screen7 = ({ aptDetail, onClose }) => {
  if (!aptDetail) return null;

  // ① 사용할 이미지 URL 풀을 선언
  const photoPool = [
    "https://landthumb-phinf.pstatic.net/20170727_55/apt_realimage_1501141532617fn29k_JPEG/c3af3f3c69eb5685e64460db3c1dfa3c.jpg?type=m1024",
    "https://landthumb-phinf.pstatic.net/20170608_48/apt_realimage_14968905976340XR6f_JPEG/4749f04e46cb7f6ba8bdd52f0f7dda57.JPG?type=m1024",
    "https://landthumb-phinf.pstatic.net/20170808_232/apt_realimage_1502158928861CyuMl_JPEG/8e99c9b06b969013a4c80dd9b50f79e6.jpg?type=m1024",
    "https://landthumb-phinf.pstatic.net/20211101_156/land_naver_1635736588464T0FmV_JPEG/6338a03124f1e4ff8d1d29edd7c41e2e.JPG?type=m1024",
    "https://landthumb-phinf.pstatic.net/20171228_179/apt_realimage_1514437559533wKnR6_JPEG/9dc7f3e057b923e2a9cd8ad42ed78f22.jpg?type=m1024",
    "https://landthumb-phinf.pstatic.net/20200720_73/apt_realimage_1595222477951wqHGB_JPEG/b14118af43f73254b8362732a447d8b6.JPG?type=m1024",
    "https://landthumb-phinf.pstatic.net/20180824_123/apt_realimage_1535074222418glODW_JPEG/82cc4d3c4db205083cc02ed41a2b927a.JPG?type=m1024",
  ];

  // ② 배열에서 랜덤으로 하나 뽑기
  const randomUrl = photoPool[Math.floor(Math.random() * photoPool.length)];

  return (
    <div className="screen-7" data-model-id="1:167">
      <div className="background-shadow">
        <div className="background-13">
          <div className="frame-117">
            <img className="image-11" alt={aptDetail.aptNm} src={randomUrl} />
            <Frame2 aptDetail={aptDetail} />
            <Frame3 aptDetail={aptDetail} />
            <Background aptDetail={aptDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};
