import React from "react";
import Link from "next/link";
import { Text, Group } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  linkText: {
    textTransform: "capitalize",
    color: theme.colorScheme === "light" && theme.colors.gray[7],
    "&:hover": {
      color: theme.colorScheme === "dark" ? "white" : "black",
    },
  },
}));

export default function NavLinks({ links }) {
  const { classes } = useStyles();
  return (
    <Group className={classes.linksContainer}>
      {links.map((link, i) => (
        <Text weight={"500"} key={i} size="md" className={classes.linkText}>
          <Link href={`/${link}`}>{link}</Link>
        </Text>
      ))}
    </Group>
  );
}
