import Hero from "../components/Home/Hero";
import {
  createStyles,
  Group,
  Image,
  Stack,
  Title,
  Transition,
  Button,
  Text,
  Space,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";
import Link from "next/link";
import Trending from "../components/Home/Trending";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: "10vw",
  },
  title: {
    fontSize: theme.fontSizes.xl * 3,
    maxWidth: "80vw",
    color: theme.colorScheme === "dark" ? "white" : "black",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: theme.fontSizes.xl * 2,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.xl * 1.5,
    },
  },
  image: {
    position: "absolute",
    right: "2%",
    top: "16%",
    transform: "scale(0.9)",
    overflow: "hidden",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none",
    },
  },
  grid: { zIndex: "10" },
  featured: {
    marginTop: theme.spacing.xl * 5,
  },
  waterMark: {
    fontSize: theme.fontSizes.xl * 12,
    maxWidth: "90vw",
    overflow: "hidden",
    position: "absolute",
    zIndex: "0",
    fontWeight: "900",
    letterSpacing: "30px",
    top: "5%",
    background: theme.colorScheme === "dark" ? theme.colors.dark[8] : "#eee",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  wrapper: {
    gap: theme.spacing.xl * 6,
  },
}));

export default function Home({}) {
  const [scroll, scrollTo] = useWindowScroll();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    scrollTo({ y: 0 });
  }, []);
  const { classes } = useStyles();

  return (
    <Stack className={classes.wrapper}>
      <Text className={classes.waterMark}>VENIX</Text>
      <Hero mounted={mounted} classes={classes} />
      <Trending />
      <Space />
    </Stack>
  );
}
