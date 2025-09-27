import z from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
        "Must contain uppercase, lowercase, number, and special character"
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
        "Must contain uppercase, lowercase, number, and special character"
      ),
    email: z.email("Email is not valid"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords are different.",
    path: ["confirmPassword"],
  });
export type registerValues = z.infer<typeof registerSchema>;
export type registerSchemaType = typeof registerSchema;
