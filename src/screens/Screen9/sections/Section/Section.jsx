import React, { useEffect, useState } from "react";
import "./style.css";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";

export const Section = () => {
  const { user } = useAuth();
  const userName = user?.name || "사용자";
  const [percentile, setPercentile] = useState(null);
  const [rankingList, setRankingList] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const [userRankRes, totalRanksRes] = await Promise.all([
          axios.get("http://localhost:8080/api/rankings/users", {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }),
          axios.get("http://localhost:8080/api/rankings", {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          })
        ]);

        setPercentile(userRankRes.data);
        setRankingList(totalRanksRes.data);
      } catch (err) {
        console.error("랭킹 데이터 불러오기 실패 ❌", err);
      }
    };

    fetchRanking();
  }, []);

  return (
    <div className="section">
      <div className="frame-47">
        <div className="container-20">
          <div className="text-wrapper-71">나의 랭킹</div>
        </div>

        <div className="frame-48">
          <img className="rank" alt="Rank" src="https://c.animaapp.com/JuAZje8Q/img/rank-1@2x.png" />
          <p className="element">
            <span className="span">현재 {userName}님의 자산은</span>
            <span className="text-wrapper-72"> </span>
            <span className="text-wrapper-73">
              {percentile ? `상위 ${percentile.percentile}%` : "로딩 중..."}
            </span>
            <span className="span">입니다.</span>
          </p>
        </div>
      </div>

      <div className="text-wrapper-74">랭킹</div>

      <div className="view-2">
        <div className="frame-49">
          <div className="frame-50">
            <div className="text-wrapper-75">{""}</div>

            <div className="rank-svg">
              <div className="rank-svg-fill" />
            </div>

            <div className="rank-svg">
              <div className="rank-svg-fill-2" />
            </div>

            <div className="rank-svg">
              <div className="rank-svg-fill-3" />
            </div>

            <div className="text-wrapper-76">4.</div>

            <div className="text-wrapper-76">5.</div>

            <div className="text-wrapper-76">6.</div>

            <div className="text-wrapper-76">7.</div>
          </div>

          <div className="frame-51">
            <div className="frame-52">
              <div className="text-wrapper-77">이름</div>

              {rankingList.slice(0, 3).map((r, i) => (
                <div key={i} className="text-wrapper-78">{r.name}</div>
              ))}
            </div>

            <div className="frame-53">
              {rankingList.slice(3).map((r, i) => (
                <div key={i} className="text-wrapper-80">{r.name}</div>
              ))}
            </div>
          </div>

          <div className="frame-54">
            <div className="frame-55">
              <div className="text-wrapper-81">수익률</div>

              {rankingList.slice(0, 3).map((r, i) => (
                <div key={i} className="frame-56">
                  <div className="markerratearrowup" />
                  <div className="text-wrapper-82">
                    {r.roi !== undefined && r.roi !== null
                      ? r.roi.toFixed(2)
                      : "0.00"}%
                  </div>

                </div>
              ))}

            </div>

            <div className="frame-57">
              {rankingList.slice(3).map((r, i) => (
                <div key={i} className="frame-56">
                  <div className="markerratearrowup" />
                  <div className="text-wrapper-82">
                    {r.roi !== undefined && r.roi !== null
                      ? r.roi.toFixed(2)
                      : "0.00"}%
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="frame-58">
            <div className="frame-59">
              <div className="text-wrapper-83">총 자산</div>

              {rankingList.slice(0, 3).map((r, i) => (
                <div key={i} className="text-wrapper-84">{formatKoreanCurrency(r.totalAsset)}</div>
              ))}
            </div>

            <div className="frame-53">
              {rankingList.slice(3).map((r, i) => (
                <div key={i} className="text-wrapper-86">{formatKoreanCurrency(r.totalAsset)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function formatKoreanCurrency(value) {
  if (value >= 1_0000_0000) {
    return `${Math.floor(value / 1_0000_0000)}억 ${(Math.floor(value % 1_0000_0000 / 10000))}만원`;
  } else if (value >= 10000) {
    return `${Math.floor(value / 10000)}만원`;
  } else {
    return `${value}원`;
  }
}
