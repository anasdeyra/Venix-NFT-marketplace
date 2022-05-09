import {
  ActionIcon,
  Button,
  createStyles,
  Header,
  useMantineColorScheme,
} from "@mantine/core";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import WalletButton from "./WalletButton";
import UserCard from "./UserCard";
import { FaSun as SunIcon, FaMoon as MoonIcon } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  header: {
    maxHeight: "4rem",
    display: "flex",
    flexDirection: "row",
    padding: `${theme.spacing.xs}px ${theme.spacing.xl}px`,
    alignItems: "center",
    flexGrow: "2",
    flexWrap: "noWrap",
    gap: theme.spacing.xl * 2,
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "white",
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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Header className={classes.header}>
      <Logo classes={classes} />
      <Searchbar classes={classes} />
      <NavLinks classes={classes} links={LINKS} />
      <WalletButton type="connect">
        <UserCard />
      </WalletButton>
      <ActionIcon
        title="toggle color mode"
        size={"xl"}
        radius={"50%"}
        color={"indigo"}
        onClick={() => {
          toggleColorScheme();
        }}
      >
        {colorScheme === "dark" ? (
          <SunIcon size={"22px"} />
        ) : (
          <MoonIcon size={"22px"} />
        )}
      </ActionIcon>
    </Header>
  );
}

const LINKS = ["marketplace", "collections"];
