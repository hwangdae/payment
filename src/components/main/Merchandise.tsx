import { MerchandiseType } from "@/types/mockupDataType";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface PropsType {
  merchandise: MerchandiseType;
}

const Merchandise = ({ merchandise }: PropsType) => {
  const router = useRouter();
  const { id, image, maker, description, price } = merchandise;
  return (
    <li
      className="border cursor-pointer hover:bg-slate-50"
      onClick={() => router.push(`/detail/${id}`)}
    >
      <div className="w-[145px] m-8">
        <h1 className="mb-3">
          <Image priority={true} width={145} height={174} src={image} alt="상품 이미지" />
        </h1>
        <h2 className="text-sm font-bold mb-1">{maker}</h2>
        <h2 className="text-sm whitespace-normal leading-4 mb-1">
          {description}
        </h2>
        <p className="text-sm font-bold mb-1">{price.toLocaleString()}원</p>
      </div>
    </li>
  );
};

export default Merchandise;
