export const loadChangeDataSchema = async () => {
  const { changeDataUserSchema } = await import("./changeDataUserSchema");
  return changeDataUserSchema;
};
