'use client'
import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Header/>
        <div className='flex max-w-[1800px] mx-auto my-0 gap-4'>
        <Sidebar/>
        <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}