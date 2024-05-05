import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  deliveryName:z.string(),
  orderName: z.string(),
  orderPhone:z.string(),
  landLinePhone: z.string(),
  address: z.string(),
  DetailedAddress: z.string(),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  coupon:z.string(),
  point:z.number(),
});
