import type { AppProps } from "next/app";
import "@/styles/globals.css";
import localFont from "next/font/local";
import Sidebar from "@/components/sidebar/Sidebar";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import Head from "next/head";

const Pretendard = localFont({
  src: [
    {
      path: "../fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-Thin.woff2",
      weight: "100",
      style: "nomal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const maincss = `${
    router.pathname === "/" || router.pathname === "/detail/[id]"
      ? "flex max-w-[1400px] mx-auto my-4 justify-between"
      : ""
  }`;
  return (
    <RecoilRoot>
      <Head>
        <title>Closet</title>
        <meta name="description" content="옷 결제 서비스" />
      </Head>
      <main className={`${Pretendard.className} ${maincss}`}>
        {router.pathname === "/" || router.pathname === "/detail/[id]" ? (
          <Sidebar />
        ) : null}
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
