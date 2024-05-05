import React from "react";

const ProductInfomation = () => {
    const price = 22900
  return (
    <section>
      <h2>주문 상품 정보</h2>
      <div className="flex gap-5 border p-5 my-5">
        <h1>
          <img src="BIGTshirt.jpg" className="w-[75px] h-[75px]"></img>
        </h1>
        <div>
          <h1>BIG 티셔츠</h1>
          <p>수량 : 1개</p>
          <p>{price}원</p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfomation;
