import React from "react";
import "./style.css";

export const Background = ({ aptDetail }) => {
  return (
    <div className="background">
      <div className="div-4">
        <div className="container-11">
          <div className="overlay-border">
            <div className="container-12">
              <div className="text-wrapper-49">매물 최고가</div>
            </div>

            <div className="container-13">
              <div className="text-wrapper-50">{`${(aptDetail.naverMaxDeal / 10000).toFixed(0)}억 ${(aptDetail.naverMaxDeal % 10000)}만`}</div>
            </div>

            <div className="container-14">
              <div className="div-wrapper-2">
                <div className="text-wrapper-52">현재 역대 최고가</div>
              </div>
            </div>
          </div>

          <div className="border">
            <div className="container-12">
              <div className="text-wrapper-53">매물 최저가</div>
            </div>

            <div className="container-15">
              <div className="text-wrapper-54">{`${(aptDetail.naverMinDeal / 10000).toFixed(0)}억 ${(aptDetail.naverMinDeal % 10000)}만`}</div>
            </div>

            <div className="container-16">
              <div className="text-wrapper-56">4주 전 가격과 동일</div>
            </div>
          </div>
        </div>

        <img className="image-6" alt="Image" src="src\assets\스크린샷 2025-05-27 114012.png" />
      </div>

      {/* ↓ 여기부터 교통·교육·편의시설 영역으로 대체 */}
      <div className="amenities">
        {/* 교통 */}
        <div className="amenity">
          <img src="https://img.icons8.com/ios-filled/24/3182f6/bus.png" alt="버스정류장" />
          <div className="count">{aptDetail.bus}</div>
          <div className="label">버스정류장</div>
        </div>
        <div className="amenity">
          <img src="https://img.icons8.com/ios-filled/24/3182f6/subway.png" alt="지하철역" />
          <div className="count">{aptDetail.metro}</div>
          <div className="label">지하철역</div>
        </div>
        <div className="amenity">
          <img src="https://img.icons8.com/ios-filled/24/3182f6/hospital.png" alt="병원" />
          <div className="count">{aptDetail.hospital}</div>
          <div className="label">병원</div>
        </div>

        {/* 편의 */}
        <div className="amenity">
          <img src="https://img.icons8.com/ios-filled/24/3182f6/shopping-cart.png" alt="마트" />
          <div className="count">{aptDetail.mart}</div>
          <div className="label">마트</div>
        </div>
        <div className="amenity">
          <img src="https://img.icons8.com/ios-filled/24/3182f6/shop.png" alt="편의점" />
          <div className="count">{aptDetail.convenience}</div>
          <div className="label">편의점</div>
        </div>

        {/* 교육 */}
        <div className="amenity">
          <img src="https://img.icons8.com/?size=100&id=50612&format=png&color=000000" alt="어린이집" />
          <div className="count">{aptDetail.infant}</div>
          <div className="label">어린이집</div>
        </div>
        <div className="amenity">
          <img src="https://img.icons8.com/?size=100&id=EnXfuJtBYJTm&format=png&color=000000" alt="유치원" />
          <div className="count">{aptDetail.preschool}</div>
          <div className="label">유치원</div>
        </div>
        <div className="amenity">
          <img src="https://img.icons8.com/ios-filled/24/3182f6/book.png" alt="초등학교" />
          <div className="count">{aptDetail.priSchool}</div>
          <div className="label">초등학교</div>
        </div>
        <div className="amenity">
          <img src="https://img.icons8.com/ios-filled/24/3182f6/backpack.png" alt="중학교" />
          <div className="count">{aptDetail.pubSchool}</div>
          <div className="label">중학교</div>
        </div>
      </div>
    </div>
  );
};
