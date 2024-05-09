'use client'
import {getDetailMerchandise, getMerchandises} from "@/api/getMerchandises";
import { MERCHANDISES } from "@/mockupData/Merchandise";
import { MerchandiseType } from "@/types/mockupData";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useQuery } from "react-query";


const Detail = () => {
  const router = useRouter()
  const {id} = router.query
  console.log(id)

  const merchandise = MERCHANDISES.find((merchandise:MerchandiseType) => {
    return merchandise.id === id;
  }) 
  console.log(merchandise)
  return (
    <main>
      <div>
        <h1>
          <img width={145} src={merchandise?.image} alt="상품 이미지"/>
        </h1>
        <h2>{merchandise?.maker}</h2>
        <h2>{merchandise?.description}</h2>
        <p>{merchandise?.price}</p>
      </div>
    </main>
  );
};

export default Detail;

export const getServerSideProps = async() => {
  return {
    props:{
      
    },
  }
}
