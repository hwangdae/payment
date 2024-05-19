import { MerchandiseType } from "@/types/mockupDataType";
import React from "react";

interface PropsType {
  items: MerchandiseType[];
}

const ProductInfomation = ({ items }: PropsType) => {

  return (
    <section>
      <h2>주문 상품 정보</h2>
      <div className="border  my-5">
      {items.map((item: MerchandiseType) => {
        return (
          <div key={item.id} className="flex gap-5 border p-2 m-2">
            <h1 className="border p-1">
              <img src={item.image} className="w-[75px] h-[75px]"></img>
            </h1>
            <div>

              <h1>{item.description}</h1>
              <p className="bg-gray-100 border text-sm">
                수량 : {item.quantity} / <span>사이즈 : {item.size}</span>
              </p>
              <p>{item.price.toLocaleString()}원</p>
            </div>
          </div>
        );
      })}
      </div>
    </section>
  );
};

export default ProductInfomation;
