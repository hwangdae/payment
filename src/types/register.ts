import { registerSchema } from "@/valitators/delivery";
import { z } from "zod";

export type RegisterInput = z.infer<typeof registerSchema>;