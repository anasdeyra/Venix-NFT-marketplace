import "../styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Navbar from "../components/Navbar/Navbar";
import { AppShell, MantineProvider, ColorSchemeProvider } from "@mantine/core";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={[4]}>
      <ColorSchemeProvider>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
            headings: { fontFamily: "Poppins, sans-serif" },
            fontFamily: "Poppins, sans-serif",
          }}
          defaultProps={{
            Title: {
              sx: (theme) => ({
                color: theme.colorScheme === "dark" ? "white" : "black",
              }),
            },
            Text: {
              sx: (theme) => ({
                color: theme.colorScheme === "dark" ? "white" : "black",
              }),
            },
          }}
        >
          <AppShell
            padding="xl"
            sx={{ position: "relative", overflow: "hidden" }}
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
