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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/valitators/delivery";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import shortid from "shortid";

const items = [
  { id: "토스페이", label: "토스페이" },
  { id: "핸드폰 결제", label: "핸드폰 결제" },
  { id: "카카오페이", label: "카카오페이" },
  { id: "신용카드", label: "신용카드" },
  { id: "무통장 입금", label: "무통장 입금" },
];

const index = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = () => {
    return alert("a");
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
                  <div className="border p-5 my-5"></div>
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
                      name="address"
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
                  <div className="border p-5 my-5"></div>
                </section>
              </div>
              <aside className="w-[30%]">
                <section className="mb-5">
                  <h2>최종 결제금액</h2>
                  <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </section>
                <section>
                  <h2>결제 방법</h2>
                  <div className="mt-5 border p-5">
                    <h3 className="mb-5">결제 수단</h3>
                    <FormField
                      control={form.control}
                      name="items"
                      render={() => (
                        <FormItem className={cn("flex flex-col")}>
                          {items.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="items"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-1 justify-start w-[100%]"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                // ...field.value,
                                                item.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="bg-slate-200 p-3">
                    <p>
                      <span className="text-blue-500 font-bold">160</span>{" "}
                      포인트 적립 예정
                    </p>
                  </div>
                </section>
              </aside>
            </form>
          </Form>
        </main>
      </div>
    </div>
  );
};

export default index;
