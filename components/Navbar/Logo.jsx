import React from "react";
import Link from "next/link";
import { createStyles, Group, Title } from "@mantine/core";
import Image from "next/image";
import logo from "../../public/favicon.ico";

const useStyles = createStyles((theme) => ({
  logoContainer: {
    cursor: "pointer",
  },
  logoTitle: {
    [`@media(max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
}));

export default function Logo({ small = false }) {
  const { classes } = useStyles();
  return (
    <Link href={"/"}>
      <Group spacing={!small ? "md" : "xs"} className={classes.logoContainer}>
        <Image
          layout="fixed"
          width={!small ? 38 : 26}
          height={!small ? 38 : 26}
          src={logo}
          alt="logo"
        />
        <Title order={!small ? 1 : 2} className={classes.logoTitle}>
          Venix
        </Title>
      </Group>
    </Link>
  );
}

function getServerSideProps() {}
