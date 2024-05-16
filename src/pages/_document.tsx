import Header from '@/components/header/Header'
import { Html, Head, Main, NextScript } from 'next/document'

 
export default function Document() {

  return (
    <Html>
      <Head />
      <body>
        <Header/>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}