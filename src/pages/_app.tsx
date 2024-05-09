import type { AppProps } from "next/app";
import "@/styles/globals.css";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "react-query";

const Pretendard = localFont({
  src: [
    {
      path: "../fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "nomal",
    },
    {
      path: "../fonts/Pretendard-Extrabold.woff2",
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
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className={Pretendard.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
