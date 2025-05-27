/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useReducer, useEffect } from "react";
import "./style.css";
import axios from "axios";


export const LocationDips = ({ className, dongcode, interested, refreshWishList }) => {
  const [state, dispatch] = useReducer(reducer, { property1: false });

  useEffect(() => {
    if (dongcode && Array.isArray(interested)) {
      const isInterested = interested.some((item) => String(item.dongcode) === String(dongcode));
      dispatch({ type: "set", value: isInterested });
    }
  }, [dongcode, interested]);


  
  const handleClick = () => {
    const newValue = !state.property1;
    dispatch({ type: "toggle" });

    const token = localStorage.getItem("authToken");

    if (newValue) {
      // ✅ 찜 등록: POST + JSON body
      console.log("🔍 찜 등록 요청할 dongcode:", dongcode);

      axios.post("http://localhost:8080/api/users/interest", { dongcode }, {
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
      axios({
        method: "delete",
        url: "http://localhost:8080/api/users/interest",
        data: {
          dongcode: dongcode, // 🔥 백엔드 record와 정확히 맞춤
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log("찜 취소 ✅", res.data);
          refreshWishList?.();
        })
        .catch((err) => {
          console.error("찜 취소 실패 ❌", err);
        });

    }
  };

  return (
    <img
      className={`dips ${className}`}
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