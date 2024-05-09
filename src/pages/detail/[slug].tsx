'use client'
import { MERCHANDISES, MerchandiseType } from "@/mockupData/Merchandise";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useState } from "react";

interface Props {
  params: string;
}
const Detail = (params:any) => {
  // const [id,setId] = useState<string | string[] | undefined>("")
  // console.log(params)
  // useLayoutEffect(()=>{
  //   const router = useRouter()
  //   const {id} = router.query
  //   setId(id)
  // },[])
  const param = useParams()
  console.log(param)
  const router = useRouter()
  const {id} = router.query
  // console.log(id)



  const merchandise = MERCHANDISES!.find((merchandise:MerchandiseType) => {
    return merchandise.id === id;
  }) 

  console.log(merchandise);
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
