import Document, { DocumentContext } from "next/document";
import { createStylesServer, ServerStyles } from "@mantine/ssr";

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Add your app specific logic here
    const stylesServer = createStylesServer();
    console.log(
      <>
        {initialProps.styles}
        <ServerStyles html={initialProps.html} server={stylesServer} />
      </>
    );

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={stylesServer} />
        </>
      ),
    };
  }
}
