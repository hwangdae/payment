import React from "react";

const DeliveryInfo = () => {

  return (
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
  );
};

export default DeliveryInfo;
