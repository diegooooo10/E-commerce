import z from "zod";
import { payTypes } from "../../constants";

export const checkoutSchema = z
  .object({
    numberCard: z
      .string()
      .min(16, "Card number must be exactly 16 digits")
      .max(16, "Card number must be exactly 16 digits")
      .regex(/^\d+$/, "Card number must contain only digits"),
    typePay: z.string(),
    address: z
      .string()
      .min(10, "Address must be at least 10 characters")
      .max(100, "Address must not exceed 100 characters"),
    phone: z
      .string()
      .min(10, "Phone number must be exactly 10 digits")
      .max(10, "Phone number must be exactly 10 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),
  })
  .refine((data) => payTypes.includes(data.typePay), {
    message: `Payment type must be one of: ${payTypes.join(", ")}`,
    path: ["typePay"],
  });

export type checkoutValues = z.infer<typeof checkoutSchema>;
export type checkoutSchemaType = typeof checkoutSchema;
