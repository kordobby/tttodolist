import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/GNB/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout stateType="recoil">
      <Component {...pageProps} />;
    </Layout>
  );
}
