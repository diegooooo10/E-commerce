export const priceWithDiscount = (discount: number, price: number) => {
  return (price * (1 - discount / 100)).toFixed(2);
};
