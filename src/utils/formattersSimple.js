export function formatShortKoreanCurrency(value) {
  const billion = 100000000;
  const million = 10000;

  if (value >= billion) {
    const short = (value / billion).toFixed(1);
    return short.endsWith(".0") ? `${parseInt(short)}억` : `${short}억`;
  }

  if (value >= million) {
    const short = (value / million).toFixed(1);
    return short.endsWith(".0") ? `${parseInt(short)}만원` : `${short}만원`;
  }

  return `${value.toLocaleString()}원`;
}
