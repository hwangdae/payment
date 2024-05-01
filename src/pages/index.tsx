import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { registerSchema } from "@/valitators/delivery";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import shortid from "shortid";
import { merchandise } from "@/mockupData/Merchandise";
import { coupons } from "@/mockupData/Coupon";

const payItems = [
  { id: "토스페이", label: "토스페이" },
  { id: "핸드폰 결제", label: "핸드폰 결제" },
  { id: "카카오페이", label: "카카오페이" },
  { id: "신용카드", label: "신용카드" },
  { id: "무통장 입금", label: "무통장 입금" },
];

// const totalPay:any = [
//   { id: "상품 가격", label: "상품 가격", money: "16,000원" },
//   { id: "쿠폰 할인", label: "쿠폰 할인", money: disCount },
//   { id: "포인트 사용", label: "포인트 사용", money: "16,000원" },
//   { id: "배송비", label: "배송비", money: "2500원" },
// ];
type RegisterInput = z.infer<typeof registerSchema>;

const Home = () => {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
    },
  });
  console.log(form.getValues().coupon)
  console.log(form.watch())
  console.log(form.formState)
  const disCount = coupons.find((coupon)=>{
    return form.watch().coupon === coupon.id && coupon.disCountType === "won" ? 29000 - coupon.disCount : 29000/coupon.disCount
  })
  console.log(disCount)
  const onSubmit = (data: RegisterInput) => {
    return alert(JSON.stringify(data, null, 2));
  };
  return (
    <div>
      <div className="m-5 border border-solid px-5">
        <header className="border-b-2 mb-5">
          <h1 className="text-4xl font-[700] py-5">Order/Payment</h1>
        </header>
        <main>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={cn("flex justify-between gap-5")}
            >
              <div className="w-[70%]">
                <section>
                  <h2>주문 상품 정보</h2>
                  <div className="flex gap-5 border p-5 my-5">
                    <h1>
                      <img
                        src="BIGTshirt.jpg"
                        className="w-[75px] h-[75px]"
                      ></img>
                    </h1>
                    <div>
                      <h1>BIG 티셔츠</h1>
                      <p>수량 : 1개</p>
                      <p>29,000원</p>
                    </div>
                  </div>
                </section>
                <section>
                  <h2>주문자 정보</h2>
                  <div className="border p-5 my-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이름</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="이름을 입력해 주세요."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이메일</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="이메일을 입력해 주세요."
                              {...field}
                            />
                          </FormControl>
                          {/* <FormMessage /> */}
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>휴대폰</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="01012345678(- 제외)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </section>
                <section>
                  <h2>배송 정보</h2>
                  <div className="border p-5 my-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>이름</FormLabel>
                          <FormControl>
                            <Input placeholder="수령인" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="ordername"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>배송지명(선택)</FormLabel>
                          <FormControl>
                            <Input placeholder="배송지명" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>휴대폰</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="01012345678(- 제외)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="landLinePhone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>전화번호</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="01012345678(- 제외)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>배송지 주소</FormLabel>
                          <FormControl>
                            <Input placeholder="주소" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="DetailedAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel></FormLabel>
                          <FormControl>
                            <Input placeholder="상세 주소" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </section>
                <section>
                  <h2>쿠폰/포인트</h2>
                  <div className="border p-5 my-5">
                    <FormField
                      control={form.control}
                      name="coupon"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>쿠폰 할인</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="쿠폰 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {coupons.map((coupon) => {
                                return (
                                  <SelectItem value={coupon.id}>
                                    {coupon.label}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="point"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>적립금 사용</FormLabel>
                          <FormControl>
                            <Input placeholder="0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </section>
              </div>
              <aside className="w-[30%]">
                <section className="mb-5">
                  <h2>최종 결제금액</h2>
                  <div className="mt-5 border p-5">
                    <Table>
                      <TableBody>

                            <TableRow>
                              <TableCell className="font-medium">
                                
                              </TableCell>
                              <TableCell className="text-right">
                                {disCount?.disCount}
                              </TableCell>
                            </TableRow>

                        <TableRow className={cn("bg-slate-100")}>
                          <TableCell className="font-medium">
                            총 결제금액
                          </TableCell>
                          <TableCell className="text-right font-bold text-blue-500">
                            16,000원
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div className="bg-slate-200 p-3">
                    <p>
                      <span className="text-blue-500 font-bold">160</span>{" "}
                      포인트 적립 예정
                    </p>
                  </div>
                </section>
                <section>
                  <h2>결제 방법</h2>
                  <div className="mt-5 border p-5">
                    <h3 className="mb-5">결제 수단</h3>
                    <RadioGroup defaultValue="카카오페이">
                      {payItems.map((item) => {
                        return (
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={item.id} id={item.id} />

                            <Label htmlFor={item.id}>{item.label}</Label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                    <div className="">
                      <h3 className="mb-5"></h3>
                    </div>
                  </div>
                </section>
                <Button type="submit" className={cn("w-[100%]")}>
                  결제하기
                </Button>
              </aside>
            </form>
          </Form>
        </main>
      </div>
    </div>
  );
};

export default Home;
