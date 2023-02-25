import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { GlobalStyle } from "../src/commons/globalStyles/globalStyles";
import Layout from "../src/commons/layout";
import ApolloSetting from "../src/commons/apollo";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={GlobalStyle}></Global>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
