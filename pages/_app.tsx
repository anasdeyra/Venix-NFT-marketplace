import { ThirdwebProvider } from "@thirdweb-dev/react";
import Navbar from "../components/Navbar/Navbar";
import { AppShell, MantineProvider, ColorSchemeProvider } from "@mantine/core";
import theme from "../theme";
import { defaultProps } from "../theme";
import { useToggle } from "@mantine/hooks";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [colorScheme, toggleColorScheme] = useToggle("dark", ["dark", "light"]);
  return (
    <ThirdwebProvider desiredChainId={[4]}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ ...theme, colorScheme }}
          defaultProps={defaultProps}
        >
          <Head>
            <title>Venix</title>
            <meta
              name="description"
              content="Venix is a an NFT marketplace opening the doors for new and small artists to thrive in the NFT wolrd"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            ></link>
            <meta name="keywords" content="NFT, crypto, marketplace" />
            <style>font-family: 'Poppins', sans-serif;</style>
          </Head>
          <AppShell
            padding="xl"
            header={<Navbar />}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[0],
              },
            })}
          >
            <Component {...pageProps} />
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
