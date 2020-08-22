export const isPositive = (str) => {
  return String(str).startsWith("+");
};

export const makePositive = (num) => {
  return Number(num) * -1;
};

export const numberfy = (str) => {
  if (Number(str) === 0) return 0;

  if (!Number(str)) return false;

  return +str;
};

export const validate = (itm, prc) => {
  const item = itm.trim();
  const price = String(prc);
  let isPriceANumber = !isNaN(Number(price));
  let isPricePositive = isPositive(price);
  let isPriceNegative = price.startsWith("-");
  let isItemEmpty = item.length > 0;

  return isItemEmpty && isPriceANumber && (isPricePositive || isPriceNegative);
};
