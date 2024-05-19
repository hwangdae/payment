import { MerchandiseType } from "@/types/mockupDataType";
import React from "react";

interface MerchandiseProps {
  merchandise: MerchandiseType | undefined;
}

const ProductInfo = ({ merchandise }: MerchandiseProps) => {

  return (
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
          <h2 className="font-bold text-[16px]">{merchandise?.description}</h2>
        </li>
      </ul>
    </div>
  );
};

export default ProductInfo;
