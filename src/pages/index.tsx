'use client'
import { MERCHANDISES } from "@/mockupData/Merchandise";
import { MerchandiseType } from "@/types/mockupData";
import { useRouter } from "next/router";
import React from "react";


const Home = () => {
  const router = useRouter();

  return (
    <main>
      <ul className="grid grid-cols-5 gap-4">
        {MERCHANDISES.map((merchandise:MerchandiseType) => {
          return (
            <li key={merchandise.id} className="border" onClick={()=>router.push(`/detail/${merchandise.id}`)}>
              <div className="w-[145px] m-8">
              <h1 className=" mb-3">
                <img width={145} src={merchandise.image} />
              </h1>
              <h2 className="text-sm font-bold mb-1">{merchandise.maker}</h2>
              <h2 className="text-sm whitespace-normal leading-4 mb-1">{merchandise.description}</h2>
              <p className="text-sm font-bold mb-1">{merchandise.price.toLocaleString()}원</p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
