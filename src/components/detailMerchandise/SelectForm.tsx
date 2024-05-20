"use client";
import React, { useState } from "react";
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
import SelectedItem from "@/components/detailMerchandise/SelectedItem";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { FormSchema } from "@/valitators/size";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/router";
import { MerchandiseType } from "@/types/mockupDataType";
import shortid from "shortid";

interface MerchandiseProps {
  merchandise: MerchandiseType | undefined;
}

const SelectForm = ({ merchandise }: MerchandiseProps) => {
  const [items, setItems] = useState<any>([]);
  const router = useRouter();
  const { id } = router.query;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      size: "",
    },
  });

  const addItemList = (value: string) => {
    if (items.find((item: MerchandiseType) => item.size === value)) {
      return;
    }
    const itemToAdd= {
      ...merchandise,
      id: shortid.generate(),
      size: value,
    };

    setItems([...items, itemToAdd]);
  };

  const price = items
    .map((item: MerchandiseType) => {
      return item?.price;
    })
    .reduce((acc: number, curr: number) => {
      return acc + curr;
    }, 0);

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
  );
};

export default SelectForm;
