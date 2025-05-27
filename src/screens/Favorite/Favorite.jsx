import React, { useEffect, useState } from "react";
import { CloseSvgFill } from "../../components/CloseSvgFill";
import { EstateCard } from "./sections/EstateCard"
import axios from "axios";
import "./style.css";

export const Favorite = ({ closeFavorite }) => {
  const [wishList, setWishList] = useState([]);

  const fetchWishList = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("http://localhost:8080/api/estate/wish", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setWishList(response.data);
      } catch (err) {
        console.error("관심 아파트 불러오기 실패 ❌", err);
      }
  };

  useEffect(() => {
    fetchWishList();
  }, []);

  return (
    <div className="favscreen" data-model-id="1:867">
      <div className="favtop" onClick={closeFavorite}>
        <CloseSvgFill className="close-svg-fill-instance" />
      </div>

      <div className="favscroll-wrapper">
        <div className="favscroll">
          <div className="favitems">
            {wishList.map((item, index) => (
              <EstateCard
                aptSeq={item.aptSeq}
                key={index}
                title={item.aptNm}
                address={`${item.roadNm} ${item.roadNmBonbun}-${item.roadNmBubun}`}
                userWishList={wishList}
                fetchWish={fetchWishList}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="fav-num">
        <div className="favtext-wrapper-5">아파트 {wishList.length}</div>
      </div>
    </div>
  );
};
