import z from "zod";

export const changeDataUserSchema = z.object({
  name: z.string().min(2, "Name is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
      "Must contain uppercase, lowercase, number, and special character"
    ),
});
export type changeDataUserValues = z.infer<typeof changeDataUserSchema>;
export type changeDataUserSchemaType = typeof changeDataUserSchema;
