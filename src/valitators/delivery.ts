import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1,"이름을 입력해 주세요.").max(10),
  email: z.string().email("이메일 형식을 입력해주세요."),
  phone: z.string().min(11,"연락처는 11자리여야 합니다.").max(11,"연락처는 11자리여야 합니다."),
  deliveryName:z.string().min(1,"이름을 입력해 주세요.").max(10),
  orderPhone:z.string().min(11,"연락처는 11자리여야 합니다.").max(11,"연락처는 11자리여야 합니다."),
  landLinePhone: z.string().min(11,"연락처는 11자리여야 합니다.").max(11,"연락처는 11자리여야 합니다."),
  address: z.string().min(1,"배송지 주소를 입력해 주세요.").max(30),
  detailedAddress: z.string().min(1,"배송지 상세주소를 입력해 주세요.").max(30),
  // items: z.array(z.string()).refine((value) => value.some((item) => item), {
  //   message: "You have to select at least one item.",
  // }),
  // coupon:z.string(),
  // point:z.string(),
});
