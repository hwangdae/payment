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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/valitators/delivery";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

const items = [{id:"",label:"",},{id:"",label:"",},{id:"",label:"",},{id:"",label:"",},{id:"",label:"",},]

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
        <header className="divide-y mb-5">
          <h1 className="text-4xl font-[700] py-5">Order/Payment</h1>
        </header>
        <main className="flex justify-between gap-5">
          <div className="w-[70%]  border">
          <section className="mb-5">
            <h2>주문 상품 정보</h2>
          </section>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <section className="mb-5">
                <h2>주문자 정보</h2>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름을 입력해 주세요." {...field} />
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
                        <Input placeholder="01012345678(- 제외)" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </section>
              <section  className="mb-5">
                <h2>배송 정보</h2>
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
                        <Input placeholder="01012345678(- 제외)" {...field} />
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
                        <Input placeholder="01012345678(- 제외)" {...field} />
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
                      <FormControl>
                        <Input placeholder="상세 주소" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /><FormField
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
              </section>
            </form>
          </Form>
          <section>
            <h2>쿠폰/포인트</h2>
          </section>
          </div>
          <aside>
          <section className="mb-5">
            <h2>최종 결제금액</h2>
          </section>
          <section className="mb-5">
            <h2>결제 방법</h2>
            <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
          </section>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default index;
