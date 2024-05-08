import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  params:string
}
const Detail = ({params}:any) => {
  const param = useParams()
  const router = useRouter()
  console.log(router)
  console.log(param)
  console.log(params)

  return (
    <div>index</div>
  )
}

export default Detail