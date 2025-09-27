export const loadRegisterSchema = async () => {
  const { registerSchema } = await import("./registerSchema");
  return registerSchema;
};
