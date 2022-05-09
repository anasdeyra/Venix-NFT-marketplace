import React from "react";
import Link from "next/link";
import { Group, Title } from "@mantine/core";
import Image from "next/image";
import logo from "../../public/favicon.ico";

export default function Logo({ classes }) {
  return (
    <Link href={"/"}>
      <Group className={classes.logoContainer}>
        <Image layout="fixed" width={36} height={36} src={logo} alt="logo" />
        <Title className={classes.logoTitle}>Venix</Title>
      </Group>
    </Link>
  );
}

function getServerSideProps() {}
