import Header from '@/components/header/Header'
import { Toaster } from '@/components/ui/toaster'
import { Html, Head, Main, NextScript } from 'next/document'

 
export default function Document() {

  return (
    <Html>
      <Head />
      <body>
        <Header/>
        <Main/>
        <Toaster />
        <NextScript />
      </body>
    </Html>
  )
}