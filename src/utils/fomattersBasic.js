export function formatKoreanCurrency(value) {
  const billion = 100000000;
  const million = 10000;

  if (value >= billion) {
    const billions = Math.floor(value / billion);
    const remainder = value % billion;

    if (remainder === 0) {
      return `${billions}억원`;
    }

    const millions = Math.floor(remainder / million);
    if (millions === 0) {
      return `${billions}억원`;
    }

    return `${billions}억 ${millions}만원`;
  }

  if (value >= million) {
    const millions = Math.floor(value / million);
    return `${millions}만원`;
  }

  return `${value.toLocaleString()}원`;
}
