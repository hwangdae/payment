"use client";
import { MERCHANDISES } from "@/mockupData/Merchandise";
import { MerchandiseType } from "@/types/mockupData";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import shortid from "shortid";
import { useRecoilState } from "recoil";
import { merchandisesState } from "@/Recoil/recoilState";

interface ItemsType {
  id: string;
  size: string;
  category?: string | undefined;
  image?: string | undefined;
  maker?: string | undefined;
  description?: string | undefined;
  quantity?: number | undefined;
  price?: number | undefined;
}

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [items, setItems] = useState<any>([]);

  const merchandise = MERCHANDISES.find((merchandise: MerchandiseType) => {
    return merchandise.id === id;
  });

  const addItemList = (value: string) => {
    if (
      items.find((item: MerchandiseType) => {
        return item.size === value;
      })
    ) {
      return;
    }
    const itemToAdd = {
      ...merchandise,
      id: shortid.generate(),
      size: value,
    };
    setItems([...items, itemToAdd]);
  };

  console.log(items);
  const FormSchema = z.object({
    size: z.string({ message: "옵션을 선택해 주세요." }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit({ size }: z.infer<typeof FormSchema>) {
    router.push({
      pathname: "/payment",
      query: {
        items : JSON.stringify(items)
      },
    },
    '/payment'
  );
  }

  const plusButtonHandler = (itemId: string) => {
    setItems((prevItems: MerchandiseType[]) =>
      prevItems.map((item: MerchandiseType) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: Number(merchandise?.price) * (item.quantity + 1),
            }
          : item
      )
    );
  };

  const minusButtonHandler = (itemId: string) => {
    setItems((prevItems: MerchandiseType[]) =>
      prevItems.map((item: MerchandiseType) =>
        item.id === itemId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              price: Number(merchandise?.price) * (item.quantity - 1),
            }
          : item
      )
    );
  };

  return (
    <main className="w-[80%]">
      <h2 className="bg-gray-900 p-4 font-bold text-white">{merchandise?.maker}</h2>
      <h2 className="py-4 font-bold">{merchandise?.description}</h2>
      <div className="flex gap-4">
        <h1 className="flex align-center justify-center border h-[600px]">
          <img src={merchandise?.image} alt="상품 이미지" />
        </h1>
        <div className="w-[35%]">
          <div className="mb-6 pb-6 border-b-2">
            <h1 className="mb-3">
              Product Info
              <span className="text-gray-300 ml-2 font-normal">제품정보</span>
            </h1>
            <ul>
              <li className="flex items-center">
                <span className="w-[80px]">브랜드</span>
                <h2 className="font-bold text-[16px]">{merchandise?.maker}</h2>
              </li>
              <li className="flex items-center">
                <span className="w-[80px]">제품</span>
                <h2 className="font-bold text-[16px]">
                  {merchandise?.description}
                </h2>
              </li>
            </ul>
          </div>
          <div className="my-6 pb-6 border-b-2">
            <h1 className="mb-3">
              Delivery Info
              <span className="text-gray-300 ml-2 font-normal">배송정보</span>
            </h1>
            <ul>
              <li className=" flex items-center">
                <span className="w-[80px]">출고 정보</span>
                <h2 className="font-bold text-[16px]">결제 3일 이내 출고</h2>
              </li>
              <li className="flex items-center">
                <span className="w-[80px]">배송 정보</span>
                <h2 className="font-bold text-[16px]">
                  국내 배송 / 입점사 배송 / 우체국택배
                </h2>
              </li>
            </ul>
          </div>
          <div className="my-6 pb-6 border-b-2">
            <h1 className="mb-3">
              Price Info
              <span className="text-gray-300 ml-2 font-normal">가격정보</span>
            </h1>
            <div className="flex items-center">
              <span className="w-[80px]">상품 금액</span>
              <p className="font-bold">
                {merchandise?.price.toLocaleString()}원
              </p>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem
                    className={cn(
                      "flex justify-center border py-3 bg-gray-50 flex-col"
                    )}
                  >
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        addItemList(value);
                      }}
                      defaultValue={field.value}
                    >
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
              {items.map((item: MerchandiseType) => {
                return (
                  <div
                    key={item.id}
                    className="flex justify-between border px-4 py-2 text-sm items-center"
                  >
                    <span className="w-[40px]">{item.size}</span>
                    <div className="flex w-[110px]">
                      <button
                        type="button"
                        className={`border px-2 bg-gray-100 ${
                          item.quantity <= 1 ? " text-gray-300" : ""
                        }`}
                        onClick={() => minusButtonHandler(item.id)}
                      >
                        -
                      </button>
                      <p className="border w-[38px] text-center">
                        {item.quantity}
                      </p>
                      <button
                        type="button"
                        className="border px-2 bg-gray-100"
                        onClick={() => plusButtonHandler(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex text-gray-600">
                      <p className="w-[82px]">
                        {item.price.toLocaleString()}원
                      </p>
                      <button
                        className="px-2"
                        onClick={() => {
                          setItems(
                            items.filter((listItem: MerchandiseType) => {
                              return listItem.id !== item.id;
                            })
                          );
                        }}
                      >
                        x
                      </button>
                    </div>
                  </div>
                );
              })}
              <div>
                <div className="flex items-center mb-3 justify-between border p-3">
                  <span className="w-[80px]">총 상품 금액</span>
                  <p className="font-bold">
                    {items
                      .map((item: MerchandiseType) => {
                        return item.price;
                      })
                      .reduce((acc: number, curr: number) => {
                        return acc + curr;
                      }, 0)
                      .toLocaleString()}
                    원
                  </p>
                </div>
              </div>
              <Button type="submit" className={cn("w-[100%] py-7")}>
                구매하기
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Detail;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
