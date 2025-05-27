import React, { useEffect, useState } from "react";
import { CloseSvgFill } from "../../components/CloseSvgFill";
import { ParagraphOverlay } from "./sections/ParagraphOverlay";
import { UserInfo } from "./sections/UserInfo";
import { Property } from "./sections/Property";
import axios from "axios";
import "./style.css";

export const MyEstate = ({ closeMyEstate }) => {
  const [user, setUser] = useState(null);
  const [estateSummary, setEstateSummary] = useState(null);
  const [estateList, setEstateList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const [userRes, estateRes] = await Promise.all([
          axios.get("http://localhost:8080/api/users", {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }),
          axios.get("http://localhost:8080/api/estate/owned", {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }),
        ]);

        setUser(userRes.data);
        setEstateSummary(estateRes.data);
        setEstateList(estateRes.data.ownedHouseList || []);
      } catch (err) {
        console.error("보유 부동산 정보 불러오기 실패 ❌", err);
      }
    };

    fetchData();
  }, []);

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

              {user && <UserInfo name={user.name} totalAsset={estateSummary?.totalCurrentPrice} />}
              {estateSummary && (
                <ParagraphOverlay
                  totalOwned={estateSummary.totalOwnedPrice}
                  totalCurrent={estateSummary.totalCurrentPrice}
                  totalDiff={estateSummary.totalPriceDifference}
                  rate={estateSummary.meanPriceDifferenceRate}
                  count={estateList.length}
                />
              )}

              {estateList.map((item, i) => (
                <Property
                  key={i}
                  name={item.aptNm}
                  dealType="매매"
                  price={`${(item.currentPrice / 10000).toFixed(0)}억 ${(item.currentPrice % 10000)}만`}
                  area={"-"}
                  date={item.purchaseDate}
                  gain={item.priceDifference}
                  gainRate={`${(item.priceDifference / item.ownedPrice * 100).toFixed(2)}%`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};