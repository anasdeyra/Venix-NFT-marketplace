import { createStyles } from "@mantine/core";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import WalletButton from "./WalletButton";
import UserCard from "./UserCard";

const useStyles = createStyles((theme) => ({
  header: {
    maxHeight: "4rem",
    background: "white",
    display: "flex",
    flexDirection: "row",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    alignItems: "center",
    flexGrow: "2",
    flexWrap: "noWrap",
    gap: theme.spacing.xl * 2,
    justifyContent: "space-between",
  },
  logoContainer: {
    cursor: "pointer",
  },
  logoTitle: {
    [`@media(max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
  linkText: {
    textTransform: "capitalize",
  },
  searchbarContainer: {
    flexGrow: "2",
  },
}));

export default function Navbar() {
  const { classes } = useStyles();
  return (
    <nav className={classes.header}>
      <Logo classes={classes} />
      <Searchbar classes={classes} />
      <NavLinks classes={classes} links={LINKS} />
      <WalletButton type="connect">
        <UserCard />
      </WalletButton>
    </nav>
  );
}

const LINKS = ["marketplace", "collections"];
