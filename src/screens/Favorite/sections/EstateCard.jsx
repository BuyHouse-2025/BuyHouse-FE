// src/screens/Screen/Favorite/sections/EstateCard.jsx
import React, { useMemo } from "react";
import "./EstateCard.css";
import { MaskGroup } from "../../../components/MaskGroup"; // ✅ 반드시 포함

const photoPool = [
  "https://landthumb-phinf.pstatic.net/20170727_55/apt_realimage_1501141532617fn29k_JPEG/c3af3f3c69eb5685e64460db3c1dfa3c.jpg?type=m1024",
  "https://landthumb-phinf.pstatic.net/20170608_48/apt_realimage_14968905976340XR6f_JPEG/4749f04e46cb7f6ba8bdd52f0f7dda57.JPG?type=m1024",
  "https://landthumb-phinf.pstatic.net/20170808_232/apt_realimage_1502158928861CyuMl_JPEG/8e99c9b06b969013a4c80dd9b50f79e6.jpg?type=m1024",
  "https://landthumb-phinf.pstatic.net/20211101_156/land_naver_1635736588464T0FmV_JPEG/6338a03124f1e4ff8d1d29edd7c41e2e.JPG?type=m1024",
  "https://landthumb-phinf.pstatic.net/20171228_179/apt_realimage_1514437559533wKnR6_JPEG/9dc7f3e057b923e2a9cd8ad42ed78f22.jpg?type=m1024",
  "https://landthumb-phinf.pstatic.net/20200720_73/apt_realimage_1595222477951wqHGB_JPEG/b14118af43f73254b8362732a447d8b6.JPG?type=m1024",
  "https://landthumb-phinf.pstatic.net/20180824_123/apt_realimage_1535074222418glODW_JPEG/82cc4d3c4db205083cc02ed41a2b927a.JPG?type=m1024"
];

export const EstateCard = ({
  aptSeq,
  title,
  type,
  address,
  priceLabel,
  priceValue,
  imageUrl,
  userWishList,
  fetchWish,
}) => {
  const randomImage = useMemo(() => {
    return photoPool[Math.floor(Math.random() * photoPool.length)];
  }, []);

  const imgSrc = imageUrl || randomImage;

  return (
    <div className="estate-card">
      {/* 찜하기 아이콘 */}
      <div className="image">
        <MaskGroup
          className="mask-group-instance"
          aptSeq={aptSeq}
          wishList={userWishList}
          refreshWishList={fetchWish}
        />
      </div>

      {/* 텍스트 컨텐츠 */}
      <div className="estate-card__content">
        <div className="estate-card__header">
          <h4 className="estate-card__title">{title}</h4>
          <span className="estate-card__type">{type}</span>
        </div>
        <p className="estate-card__address">{address}</p>
        <div className="estate-card__price">
          <span className="estate-card__price-label">{priceLabel}</span>
          <span className="estate-card__price-value">{priceValue}</span>
        </div>
      </div>

      {/* 이미지 썸네일 */}
      <div className="estate-card__img">
        <img
          src={imgSrc}
          alt={title}
          onError={(e) => {
            const fallback = photoPool[Math.floor(Math.random() * photoPool.length)];
            e.currentTarget.src = fallback;
          }}
        />
      </div>
    </div>
  );
};
