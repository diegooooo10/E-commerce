export const loadCheckoutSchema = async () => {
  const { checkoutSchema } = await import("./checkoutSchema");
  return checkoutSchema;
};
