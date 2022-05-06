import React from "react";
import Link from "next/link";
import { Group, Image, Text, Title } from "@mantine/core";

export default function Logo({ classes }) {
  return (
    <Link href={"/"}>
      <Group className={classes.logoContainer}>
        <Image sx={{ width: "36px" }} src="favicon.ico" alt="logo" />
        <Title className={classes.logoTitle}>Venix</Title>
      </Group>
    </Link>
  );
}
