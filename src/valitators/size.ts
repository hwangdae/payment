import { z } from "zod";

export const FormSchema = z.object({
  size: z.string({ message: "옵션을 선택해 주세요." }),
});
