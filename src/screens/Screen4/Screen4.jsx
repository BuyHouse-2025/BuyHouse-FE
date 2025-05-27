import { useEffect, useState } from "react";
import axios from "axios";
import { MaskGroup } from "../../components/MaskGroup";
import "./style.css";

export const Screen4 = ({ dongData = [], onMoveToLocation }) => {
  const [interestList, setInterestList] = useState([]);

  useEffect(() => {
    const fetchInterest = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log("▶️ /api/users 요청 보냄…", token);

        const res = await axios.get("http://localhost:8080/api/users/interest", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        console.log("🎯 응답 구조 확인:", res.data);
        setInterestList(res.data.interests || []);
      } catch (err) {
        console.error("❌ 관심지역 불러오기 실패", err);
      }
    };

    fetchInterest();
  }, []);

  const handleClick = (item) => {
  const { sido, gugun, dong, lat, lng } = item;

  if (lat === undefined || lng === undefined) {
    alert("해당 지역의 좌표가 없습니다.");
    return;
  }

  onMoveToLocation({
    sido,
    district: gugun,
    neighborhood: dong,
    lat,
    lng,
  });
};


  return (
    <div className="screen-4">
      <div className="overlap-group-2">
        <div className="frame-91">
          <div className="frame-92">
            {interestList.map((item) => (
              <div key={item.id} className="frame-93" onClick={() => handleClick(item)}>
                <MaskGroup
                  className="mask-group-12"
                  property1="false"
                  propertyFalse="https://c.animaapp.com/JuAZje8Q/img/-@2x.png"
                />
                <div className="text-wrapper-112">
                  {`${item.sido} ${item.gugun} ${item.dong}`}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};
