"use client";
import { getDetailMerchandise, getMerchandises } from "@/api/getMerchandises";
import { MERCHANDISES } from "@/mockupData/Merchandise";
import { MerchandiseType } from "@/types/mockupData";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Query, useQuery } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";
const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const merchandise = MERCHANDISES.find((merchandise: MerchandiseType) => {
    return merchandise.id === id;
  });

  const FormSchema = z.object({
    size: z
      .string()
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  function onSubmit(data: z.infer<typeof FormSchema>) {

    router.push('/payment')
  }
  console.log(form.getValues().size)
  return (
    <main className=" w-[100%]">
      <h2 className="bg-gray-200 p-4 font-bold">{merchandise?.maker}</h2>
      <h2 className="py-4 font-bold">{merchandise?.description}</h2>
      <div className="flex gap-4">
        <h1 className="flex align-center justify-center border">
          <img
            src={merchandise?.image}
            alt="상품 이미지"
          />
        </h1>
        <div>
          <div className="mb-6 pb-6 border-b-2">
          <h1 className="mb-3">Product Info<span className="text-gray-300 ml-2 font-normal">제품정보</span></h1>
          <ul>
            <li className="flex items-center">
              <span className="w-[80px]">브랜드</span>
              <h2 className="font-bold text-[16px]">{merchandise?.maker}</h2>
            </li>
            <li className="flex items-center">
              <span className="w-[80px]">제품</span>
              <h2 className="font-bold text-[16px]">{merchandise?.description}</h2>
            </li>
          </ul>
          </div>
          <div className="my-6 pb-6 border-b-2">
          <h1 className="mb-3">Delivery Info<span className="text-gray-300 ml-2 font-normal">배송정보</span></h1>
          <ul>
            <li className=" flex items-center">
              <span className="w-[80px]">출고 정보</span>
              <h2 className="font-bold text-[16px]">결제 3일 이내 출고</h2>
            </li>
            <li className="flex items-center">
              <span className="w-[80px]">배송 정보</span>
              <h2 className="font-bold text-[16px]">국내 배송 / 입점사 배송 / 우체국택배</h2>
            </li>
          </ul>
          </div>
          <div className="my-6 pb-6 border-b-2">
          <h1 className="mb-3">Price Info<span className="text-gray-300 ml-2 font-normal">가격정보</span></h1>
          <ul>
            <li className=" flex items-center">
              <span className="w-[80px]">판매가</span>
              <p className="font-bold">{merchandise?.price.toLocaleString()} 원</p>
            </li>
          </ul>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[100%] space-y-6">
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem className={cn("w-[100%]")}>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="옵션 선택" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="M">M</SelectItem>
                  <SelectItem value="L">L</SelectItem>
                  <SelectItem value="XL">XL</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={cn("w-[100%]")}>구매하기</Button>
      </form>
    </Form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Detail;

export const getServerSideProps = async () => {
  return {
    props: {
    },
  };
};
