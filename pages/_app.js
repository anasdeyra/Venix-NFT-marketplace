import "../styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Navbar from "../components/Navbar/Navbar";
import { AppShell, MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={[4]}>
      <MantineProvider
        theme={{
          headings: { fontFamily: "Poppins, sans-serif" },
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <AppShell
          sx={{ position: "relative", overflow: "hidden" }}
          padding="xl"
          header={<Navbar />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
