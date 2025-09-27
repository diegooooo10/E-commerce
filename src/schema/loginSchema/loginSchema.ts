import z from "zod";

export const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
      "Must contain uppercase, lowercase, number, and special character"
    ),
});
export type loginValues = z.infer<typeof loginSchema>;
export type loginSchemaType = typeof loginSchema;
