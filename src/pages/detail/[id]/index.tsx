import { MERCHANDISES } from "@/mockupData/Merchandise";
import { MerchandiseType } from "@/types/mockupDataType";
import { useRouter } from "next/router";
import React from "react";
import ProductInfo from "@/components/detailMerchandise/ProductInfo";
import DeliveryInfo from "@/components/detailMerchandise/DeliveryInfo";
import PriceInfo from "@/components/detailMerchandise/PriceInfo";
import SelectForm from "@/components/detailMerchandise/SelectForm";
import Image from "next/image";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const merchandise = MERCHANDISES.find((merchandise: MerchandiseType) => {
    return merchandise.id === id;
  });

  return (
    <main className="w-[80%]">
      <h2 className="bg-gray-900 p-4 font-bold text-white">
        {merchandise?.maker}
      </h2>
      <h2 className="py-4 font-bold">{merchandise?.description}</h2>
      <div className="flex gap-4">
        <h1 className="flex align-center justify-center border h-[600px]">
          <Image priority={true} width={500} height={600} src={merchandise!.image} alt="상품 이미지" />
        </h1>
        <div className="w-[35%]">
          <ProductInfo merchandise={merchandise} />
          <DeliveryInfo />
          <PriceInfo merchandise={merchandise} />
          <SelectForm merchandise={merchandise}/>
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
