import React from "react";
import Link from "next/link";
import { Text, Group } from "@mantine/core";

export default function NavLinks({ links, classes }) {
  return (
    <Group className={classes.linksContainer}>
      {links.map((link, i) => (
        <Link href={`/${link}`} passHref>
          <Text
            component="a"
            weight={"500"}
            key={i}
            size="md"
            className={classes.linkText}
          >
            {link}
          </Text>
        </Link>
      ))}
    </Group>
  );
}
