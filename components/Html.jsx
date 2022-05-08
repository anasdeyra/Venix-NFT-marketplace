import Document, { Head, Html as H, Main, NextScript } from "next/document";

export default function Html({ children, styles }) {
  return (
    <H>
      <Head>{styles}</Head>
      <body>
        <Main>{children}</Main>
        <NextScript />
      </body>
    </H>
  );
}
