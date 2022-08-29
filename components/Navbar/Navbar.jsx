import { Button, createStyles, Header } from "@mantine/core";
import NavLinks from "./NavLinks";
import Logo from "../Logo";
import Searchbar from "./Searchbar";
import WalletButton from "./WalletButton";
import UserCard from "./UserCard";

import ToggleColorSchemeButton from "../Home/ToggleColorSchemeButton";
import { useAddress } from "@thirdweb-dev/react";
import { NextLink } from "@mantine/next";

const useStyles = createStyles((theme) => ({
  header: {
    maxHeight: "4rem",
    display: "flex",
    flexDirection: "row",
    padding: `${theme.spacing.xs}px ${theme.spacing.xl}px`,
    alignItems: "center",
    flexGrow: "2",
    flexWrap: "noWrap",
    gap: theme.spacing.xl,
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "white",
  },

  searchbarContainer: {
    flexGrow: "2",
  },
}));

export default function Navbar() {
  const { classes } = useStyles();
  const address = useAddress();

  return (
    <Header className={classes.header}>
      <Logo />
      <Searchbar classes={classes} />
      <NavLinks classes={classes} links={LINKS} />
      {address && (
        <Button component={NextLink} href="/create-nft">
          Create
        </Button>
      )}
      <WalletButton type="connect">
        <UserCard />
      </WalletButton>

      <ToggleColorSchemeButton />
    </Header>
  );
}

const LINKS = ["explore", "stats", "activities", "help"];
