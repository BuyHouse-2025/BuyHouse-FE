/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useReducer, useEffect } from "react";
import "./style.css";
import axios from "axios";


export const MaskGroup = ({ className, aptSeq, wishList, refreshWishList }) => {
  const [state, dispatch] = useReducer(reducer, { property1: false });

  useEffect(() => {
  if (aptSeq && Array.isArray(wishList)) {
    const isWished = wishList.some((item) => String(item.aptSeq) === String(aptSeq));
    console.log("isWished 초기 상태:", isWished, "for aptSeq:", aptSeq);
    dispatch({ type: "set", value: isWished });
  }
}, [aptSeq, wishList]);


  
  const handleClick = () => {
    const newValue = !state.property1;
    dispatch({ type: "toggle" });

    const token = localStorage.getItem("authToken");

    if (newValue) {
      // ✅ 찜 등록: POST + JSON body
      axios.post("http://localhost:8080/api/estate/wish", { aptSeq }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }).then((res) => {
        console.log("찜 완료 ✅", res.data);
        refreshWishList?.();
      }).catch((err) => {
        console.error("찜 실패 ❌", err);
      });

    } else {
      // ✅ 찜 취소: DELETE + path variable
      axios.delete(`http://localhost:8080/api/estate/wish/${aptSeq}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }).then((res) => {
        console.log("찜 취소 ✅", res.data);
        refreshWishList?.();
      }).catch((err) => {
        console.error("찜 취소 실패 ❌", err);
      });
    }
  };

  return (
    <img
      className={`mask-group ${className}`}
      alt="Property"
      src={
        state.property1
          ? "https://c.animaapp.com/JuAZje8Q/img/-@2x.png"
          : "https://c.animaapp.com/JuAZje8Q/img/property-1-variant2@2x.png"
      }
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    />
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { property1: !state.property1 };
    case "set":
      return { property1: action.value };
    default:
      return state;
  }
}