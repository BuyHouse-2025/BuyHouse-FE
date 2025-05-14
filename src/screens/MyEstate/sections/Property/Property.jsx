import React from "react";
import "./style.css";

// ✅ 날짜 포맷 (예: 2024-06-01 → 2024.06.01)
const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};

// ✅ 금액 포맷 (예: 42000000 → +₩42,000,000)
const formatCurrency = (amount) => {
  const sign = amount > 0 ? "+" : amount < 0 ? "-" : "";
  const absAmount = Math.abs(amount);
  return `${sign}₩${absAmount.toLocaleString()}`;
};
export const Property = ({ name, dealType, price, area, date, gain, gainRate }) => {
  return (
    <div className="property-card">
      <div className="top">
        <div className="text name">{name}</div>
      </div>

      <div className="info">
        <div className="deal-type-wrapper">
          <div className="text deal-type">{dealType}</div>
        </div>
        <div className="text price">{price}</div>
        <div className="vertical-divider" />
        <div className="text area">{area}</div>
      </div>

      <div className="date">
        <div className="label-wrapper">
          <div className="text label">구매일</div>
          <div className="text label">현재 수익</div>
        </div>
      </div>

      <div className="gain">
        <div className="text label">{formatDate(date)}</div>
        <div className="gain-wrapper">
          <div className="text amount">{formatCurrency(gain)}</div>
          <div className="text rate">{gainRate}</div>
        </div>
      </div>
    </div>
  );
};
