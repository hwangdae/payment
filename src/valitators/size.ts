import { z } from "zod";

export const FormSchema = z.object({
  size: z.string().min(1, "옵션을 선택해 주세요."),
});
