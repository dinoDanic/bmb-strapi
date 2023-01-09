const exchangeRate = 7.5345;

const toFixed = (num: number): number => {
  return Number(num.toFixed(2));
};

export function calculatePriceWithTax(price: number): number {
  const tax = 0.25;
  return toFixed(price * (1 + tax));
}

export function convertEURtoHRK(amount: number): number {
  return toFixed(amount * exchangeRate);
}

export const convertEurVpcToHrkMpc = (amount: number): number => {
  const eurMpc = calculatePriceWithTax(amount);
  return toFixed(convertEURtoHRK(eurMpc));
};
