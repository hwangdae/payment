import React from "react";
import { useForm } from "react-hook-form";
import {z} from "zod"
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
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/valitators/delivery";

const index = () => {
  const form = useForm<z.infer<typeof registerSchema>>();
  return (
    <div>
      <div className="m-5 border border-solid">
        <header>
          <h1>Order/Payment</h1>
        </header>
        <main>
          <section>
            <h2>주문 상품 정보</h2>
          </section>
          <section>
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
                    <Input placeholder="이메일을 입력해 주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /><FormField
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
          <section>
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
            /><FormField
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
          /><FormField
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
        /><FormField
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
              <Input placeholder="상세주소" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
          </section>
          <section>
            <h2>쿠폰/포인트</h2>
          </section>
        </main>
      </div>
    </div>
  );
};

export default index;
