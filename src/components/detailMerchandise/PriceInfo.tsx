import React from "react";
import { MerchandiseType } from "@/types/mockupData";

interface MerchandiseProps {
  merchandise: MerchandiseType | undefined;
}

const PriceInfo = ({ merchandise }: MerchandiseProps) => {
  return (
    <div className="my-6 pb-6 border-b-2">
      <h1 className="mb-3">
        Price Info
        <span className="text-gray-300 ml-2 font-normal">가격정보</span>
      </h1>
      <div className="flex items-center">
        <span className="w-[80px]">상품 금액</span>
        <p className="font-bold">{merchandise?.price.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default PriceInfo;
