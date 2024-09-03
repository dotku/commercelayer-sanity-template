import React from "react";
import { AppProps } from "next/app";
import "../styles/main.css";

function CustomApp({ Component, pageProps }: AppProps) {
  console.log("pageProps", pageProps);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
