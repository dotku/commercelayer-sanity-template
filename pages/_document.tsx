import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  console.log("document")
  return (
    <Html lang="en-US">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
