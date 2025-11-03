"use client";
import { useRecoilValue } from "recoil";
import { categoryState } from "@/Recoil/recoilState";
import Merchandise from "@/components/main/Merchandise";
import { MERCHANDISES } from "@/mockupData/Merchandise";
import { MerchandiseType } from "@/types/mockupDataType";
import React from "react";
import Head from "next/head";

const Home = () => {
  const category = useRecoilValue(categoryState);

  return (
    <>
      <Head>
        <title>홈 | Closet</title>
      </Head>
      <main>
        <ul className="grgid grid-cols-5 gap-4">
          {MERCHANDISES.filter((merchandise) => {
            return category === "all" || merchandise.category === category;
          }).map((merchandise: MerchandiseType) => {
            return (
              <Merchandise key={merchandise.id} merchandise={merchandise} />
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;
