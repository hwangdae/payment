import { z } from "zod";

export const registerSchema = z.object({
    name:z.string(),
    email:z.string(),
    phone:z.string(),
    ordername:z.string(),
    landLinePhone:z.string(),
    address:z.string(),
})