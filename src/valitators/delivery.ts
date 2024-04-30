import { z } from "zod";

export const registerSchema = z.object({
    name:z.string(),
    email:z.string(),
    phone:z.string(),
    ordername:z.string(),
    landLinePhone:z.string(),
    address:z.string(),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
})