export function formatKoreanCurrency(value) {
  const billion = 100000000;
  const million = 10000;

  if (!value || isNaN(value)) return "0원";

  if (value >= billion) {
    const billions = Math.floor(value / billion);
    const remainder = value % billion;

    const millions = Math.floor(remainder / million);
    return `${billions}억${millions > 0 ? ` ${millions}만원` : ""}`;
  }

  if (value >= million) {
    const millions = Math.floor(value / million);
    return `${millions}만원`;
  }

  return `${value.toLocaleString()}원`;
}
