"use client";
import { MERCHANDISES } from "@/mockupData/Merchandise";
import { MerchandiseType } from "@/types/mockupData";
import { useRouter } from "next/router";
import React, { useState } from "react";
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
import { FormSchema } from "@/valitators/size";
import SelectedItem from "@/components/detailMerchandise/SelectedItem";
import ProductInfo from "@/components/detailMerchandise/ProductInfo";
import DeliveryInfo from "@/components/detailMerchandise/DeliveryInfo";
import PriceInfo from "@/components/detailMerchandise/PriceInfo";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [items, setItems] = useState<any>([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      size: "",
    },
  });

  const merchandise = MERCHANDISES.find((merchandise: MerchandiseType) => {
    return merchandise.id === id;
  });

  const price = items
    .map((item: MerchandiseType) => {
      return item.price;
    })
    .reduce((acc: number, curr: number) => {
      return acc + curr;
    }, 0);

  const addItemList = (value: string) => {
    if (items.find((item: MerchandiseType) => item.size === value)) {
      return;
    }
    const itemToAdd = {
      ...merchandise,
      id: shortid.generate(),
      size: value,
    };

    setItems([...items, itemToAdd]);
  };

  function onSubmit() {
    router.push(
      {
        pathname: "/payment",
        query: { id, items: JSON.stringify(items), price },
      },
      "/payment"
    );
  }

  return (
    <main className="w-[80%]">
      <h2 className="bg-gray-900 p-4 font-bold text-white">
        {merchandise?.maker}
      </h2>
      <h2 className="py-4 font-bold">{merchandise?.description}</h2>
      <div className="flex gap-4">
        <h1 className="flex align-center justify-center border h-[600px]">
          <img src={merchandise?.image} alt="상품 이미지" />
        </h1>
        <div className="w-[35%]">
          <ProductInfo merchandise={merchandise} />
          <DeliveryInfo />
          <PriceInfo merchandise={merchandise} />
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
              <SelectedItem
                items={items}
                setItems={setItems}
                merchandise={merchandise}
              />
              <div>
                <div className="flex items-center mb-3 justify-between border p-3">
                  <span className="w-[80px]">총 상품 금액</span>
                  <p className="font-bold">{price.toLocaleString()}원</p>
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
