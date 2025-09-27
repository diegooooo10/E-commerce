export const loadLoginSchema = async () => {
  const { loginSchema } = await import("./loginSchema")
  return loginSchema
}