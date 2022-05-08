import "../styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Navbar from "../components/Navbar/Navbar";
import { AppShell, MantineProvider, ColorSchemeProvider } from "@mantine/core";
import theme from "../theme";
import { defaultProps } from "../theme";
import { useToggle } from "@mantine/hooks";

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
