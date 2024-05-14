"use client";
import { categoryState } from "@/Recoil/categoryState";
import Merchandise from "@/components/main/Merchandise";
import { MERCHANDISES } from "@/mockupData/Merchandise";
import { MerchandiseType } from "@/types/mockupData";
import React from "react";
import { useRecoilValue } from "recoil";

const Home = () => {
  const category = useRecoilValue(categoryState);

  return (
    <main>
      <ul className="grid grid-cols-5 gap-4">
        {MERCHANDISES.filter((merchandise) => {
          return category === "all" || merchandise.category === category;
        }).map((merchandise: MerchandiseType) => {
          return <Merchandise key={merchandise.id} merchandise={merchandise} />;
        })}
      </ul>
    </main>
  );
};

export default Home;
